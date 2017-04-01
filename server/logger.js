const winston = require('winston');

winston.emitErrs = true;

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      level: 'info',
      json: false,
      colorize: true,
    }),
    new (winston.transports.File)({
      level: 'info',
      name: 'info-file',
      filename: './logs/info.log',
      json: false,
      colorize: true,
    }),
    new (winston.transports.File)({
      level: 'debug',
      name: 'debug-file',
      filename: './logs/debug.log',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
