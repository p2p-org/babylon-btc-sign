FROM node:22.7.0-bullseye

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install

COPY sign.js .

CMD ["node", "sign.js"]