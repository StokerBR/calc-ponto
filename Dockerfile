FROM node:current-alpine3.16

RUN apk update && apk upgrade
RUN apk add git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "run", "prod" ]