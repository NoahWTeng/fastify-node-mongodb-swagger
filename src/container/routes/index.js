const fp = require('fastify-plugin');
const { ProductRoutes } = require('../../app/routes');

module.exports = fp(
  async function(fastify) {
    fastify
      // APIs modules
      .register(ProductRoutes, {
        prefix: `/api/${fastify.config.version}/products`
      });
  },
  { name: 'routers' }
);
