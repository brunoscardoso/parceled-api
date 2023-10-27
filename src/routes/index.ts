import { FastifyInstance } from 'fastify';
import swagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui'
import frb from 'fastify-raw-body';

import docs from 'routes/docs';
import users from './users';
import * as userSchema from 'schemas/userSchema';
import AuthController from 'controllers/authController';
// import UsersController from 'controllers/usersController';

const authController = new AuthController();
// const usersController = new UsersController();

async function authenticated(app: FastifyInstance) {
  // app.addHook('preHandler', jwtAuth);
  app.register(users, { prefix: 'users' });
  return
}

export default async function (app: FastifyInstance) {
  if (process.env.ENVIRONMENT == 'development') {
    app.register(swagger, docs);
    await app.register(fastifySwaggerUi, {
      routePrefix: '/docs',
      initOAuth: {},
      uiConfig: {
        docExpansion: 'full',
        deepLinking: false
      },
      uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
      },
      staticCSP: true,
      transformStaticCSP: (header) => header
    })
  }

  app.register(frb, {
    field: 'rawBody', // change the default request.rawBody property name
    global: false, // add the rawBody to every request. **Default true**
    encoding: 'utf8', // set it to false to set rawBody as a Buffer **Default utf8**
    runFirst: true, // get the body before any preParsing hook change/uncompress it. **Default false**
    routes: [], // array of routes, **`global`** will be ignored, wildcard routes not supported
  });

  app.register(authenticated);

  app.post('/users/login', { schema: userSchema.authSchema }, authController.login);

  app.get('/status', { schema: {} }, async () => {
    return { status: 'ok' };
  });

  app.get('/', { schema: {} }, async () => {
    return { status: 'ok' };
  });
}