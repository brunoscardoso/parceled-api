import winston from 'winston';
import debugFormat from 'winston-format-debug';

const sensitive_keys = ['password', 'pass', 'secret', 'token'];

export default winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ message: true }),
        debugFormat({
          colorizeMessage: false,
        }),
      ),
    }),
  ],
});

export const filterLog = (obj: any) => {
  const newObj = obj;
  for(let i=0; i<sensitive_keys.length; i++) {
    if (newObj['body'] && sensitive_keys[i] in newObj['body']) {
      newObj['body'][sensitive_keys[i]] = '*sensitive*';
    }
  }

  return newObj;
}