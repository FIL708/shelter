FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

COPY client ./client

RUN yarn install:client --production

RUN yarn build

COPY server ./server

RUN yarn install:server --production\

RUN mv -v ./client/build/* ./server/public/

RUN rm -rf ./client

CMD ["yarn", "start:production"]