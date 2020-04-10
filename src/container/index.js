const fp = require('fastify-plugin');

module.exports = fp(
  async function(fastify) {
    fastify
      .register(fp(require('./plugins')))
      .register(fp(require('./database')))
      .register(fp(require('./routes')));
  },
  { name: 'registers-container' }
);
