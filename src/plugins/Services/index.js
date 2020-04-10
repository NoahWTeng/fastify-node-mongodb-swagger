const fp = require('fastify-plugin');
const { forEachObjIndexed } = require('ramda');
const { camelCase } = require('change-case');
const services = require('../../app/services');

module.exports = fp(async function(fastify) {
  const decorateServices = (value, key, obj) => {
    const createClass = new value(fastify.mongodb);
    fastify.decorate(camelCase(key), createClass);
  };
  forEachObjIndexed(decorateServices, services);
});
