FROM node:16-alpine

RUN npm i -g yarn

RUN mkdir /app
COPY package.json jest.config.js yarn.lock tsconfig.json app/

COPY src/ /app/src
COPY tests/ /app/tests
WORKDIR /app

RUN rm -rf node_modules && yarn install --frozen-lockfile

from base as test
CMD yarn jest --passWithNoTests

from base as build
RUN yarn build
CMD ["node", "./build/main/src/index.js"]
