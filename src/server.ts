import fastify from 'config/app';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

fastify().then(async (app) => {
  try {
    await app.listen({ port: 3000 })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
});
