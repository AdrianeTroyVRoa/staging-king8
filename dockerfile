FROM node:18 as base

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "./app.js"]
