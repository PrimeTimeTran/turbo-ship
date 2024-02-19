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
ENV MONGODB_URI=mongodb://host.docker.internal:27017/turboship
RUN npm run build

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]