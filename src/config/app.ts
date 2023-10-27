import "dotenv/config";
import Fastify from "fastify";
import cors from '@fastify/cors'

import routes from "routes";
import logger, { filterLog } from 'services/log';

export default async () => {
  const fastify = Fastify({
    bodyLimit: 1048576 * 4,
    logger: true,
    disableRequestLogging: true
  });

  fastify.addHook("onRequest", (req, reply, done) => {
    logger.log({
      level: 'info',
      message: JSON.stringify(filterLog({
        type: 'Request',
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        hostname: req.hostname,
        remoteAddress: req.ip,
        remotePort: req.socket.remotePort
      }))
    });
    done();
  });

  fastify.addHook("onResponse", (req, reply, done) => {
    logger.log({
      level: 'info',
      message: JSON.stringify(filterLog({
        type: 'Response',
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body,
        hostname: req.hostname,
        remoteAddress: req.ip,
        remotePort: req.socket.remotePort
      }))
    });
    done();
  });

  await fastify.register(routes);
  await fastify.register(cors)

  return fastify;
};
