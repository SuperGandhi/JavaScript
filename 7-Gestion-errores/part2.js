

// console.log("Hi showing to the screen");
// console.info("Hi I'm informative message");
// console.warn("Hi is an warning");
// console.debug("Hi I'm debug");
// console.error("Hi I'm ERROR")

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


logger.log("Hi showing to the screen");
logger.info("Hi I'm informative message");
logger.warn("Hi is an warning");
logger.debug("Hi I'm debug");
logger.error("Hi I'm ERROR")