# Dockerfile
FROM node:18-alpine3.18

WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY .env .
COPY package.json .
COPY package-lock.json ./
RUN npm install

COPY . .

ENV $(cat .env | grep -v ^# | xargs)
ENV NODE_ENV=production
ENV MONGODB_URI=$MONGODB_URI

EXPOSE 3000

RUN npm run build

CMD ["node", ".output/server/index.mjs" ]
