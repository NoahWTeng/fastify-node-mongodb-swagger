const ctrl = require('../controllers/products.controller');
const {
  search,
  get,
  create,
  update,
  deleted
} = require('./schemas/products.schema');

module.exports = async function(fastify) {
  fastify.get('/:id', { schema: get }, ctrl(fastify).get);
  fastify.get('/', { schema: search }, ctrl(fastify).search);
  fastify.delete('/:id', { schema: deleted }, ctrl(fastify).delete);
  fastify.put('/:id', { schema: update }, ctrl(fastify).update);
  fastify.post('/', { schema: create }, ctrl(fastify).create);
};
