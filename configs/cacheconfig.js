const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30, checkperiod: 60 }); // Cache expira em 30 segundos

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

module.exports = { cache, logger };
