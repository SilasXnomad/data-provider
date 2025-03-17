import winston from 'winston';
import { LOG_LEVEL } from './env';

export const LOGGER = winston.createLogger({
  level: LOG_LEVEL,
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console()],
});
