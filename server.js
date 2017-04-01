const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./server/config.js');
const logger = require('./server/logger.js');
const routes = require('./server/routes.js');

const app = express();

mongoose.connect(config.mongoUrl);

app.use(morgan('combined', { stream: logger.stream }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use('/', routes);

app.listen(config.expressPort, () => {
  logger.info(`App listening on port ${config.expressPort}`);
});
