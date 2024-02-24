# Dockerfile
FROM node:18-alpine3.18

WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY .env.production .
COPY package.json .
COPY package-lock.json ./
COPY start.sh .
COPY . .

RUN chmod +x start.sh
RUN npm install

RUN echo $MONGODB_URI
RUN echo $NUXT_HOST
RUN echo $NUXT_HOST_URL

RUN npm run build

EXPOSE 8080

CMD ["sh", "-c", "cd /usr/src/app && ./start.sh"]