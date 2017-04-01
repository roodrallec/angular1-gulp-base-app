FROM node:7.8.0

ENV APP_HOME /proselytize
ENV PORT 80
ENV NODE_ENV production

RUN npm install gulp bower -g

RUN mkdir -p $APP_HOME

WORKDIR $APP_HOME

COPY ./package.json ./
RUN npm install --production

COPY ./bower.json ./
RUN bower install --allow-root

COPY . $APP_HOME

RUN npm install --production
RUN bower install --allow-root
RUN npm run build

EXPOSE $PORT

CMD ["npm", "start"]
