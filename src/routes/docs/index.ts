export default {
  routePrefix: '/docs',
  exposeRoute: true,
  hiddenTag: 'hidden',
  swagger: {
    info: {
      title: 'parceled-api',
      description: 'Parceled API',
      version: '0.0.1',
    },
    servers: [
      { url: `http://localhost:3000`, description: 'local development' },                
    ],
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};
