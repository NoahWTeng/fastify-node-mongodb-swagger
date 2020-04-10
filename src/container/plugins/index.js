const fp = require('fastify-plugin');

module.exports = fp(
  async function(fastify) {
    fastify
      .use(require('morgan')('dev'))
      .register(require('fastify-cors'))
      .register(require('fastify-compress'))
      .register(require('fastify-helmet'))
      .register(require('fastify-swagger'), fastify.config.swagger);
  },
  { name: 'plugins-container' }
);
