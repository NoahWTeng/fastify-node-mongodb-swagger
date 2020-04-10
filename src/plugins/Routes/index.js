const fp = require('fastify-plugin');
const { forEachObjIndexed } = require('ramda');
const routes = require('../../app/routes');

module.exports = fp(async function(fastify) {
  const registerRoutes = (value, key, obj) => {
    fastify.register(obj[key], {
      prefix: `/api/${fastify.config.version}/${key}`
    });
  };
  forEachObjIndexed(registerRoutes, routes);
});
