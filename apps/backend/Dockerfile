FROM node:20

WORKDIR /usr/src/app

COPY packega*.json ./
RUN npm install

COPY . .

RUN npm install -g ts-node nodemon

EXPOSE 3000