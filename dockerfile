FROM node:18 as base

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN rm -rf node_modules
RUN rm -rf dist

RUN npm install

COPY . .

RUN npm run prisma:generate

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start:dev"]
