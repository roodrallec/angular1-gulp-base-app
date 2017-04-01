const yaml = require('node-yaml-config');

const config = yaml.load('./server/config.yml');

if (process.env.MONGO_URL) {
  config.mongoUrl = process.env.MONGO_URL;
}

if (process.env.EXPRESS_PORT) {
  config.expressPort = process.env.EXPRESS_PORT;
}

module.exports = config;
