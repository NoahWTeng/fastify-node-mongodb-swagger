const { productsCtrl } = require('../controllers');
const {
  search,
  get,
  create,
  update,
  deleted
} = require('./schemas/products.schema');

module.exports = async function(fastify) {
  fastify.get('/:id', { schema: get }, productsCtrl.get);
  fastify.get('/', { schema: search }, productsCtrl.search);
  fastify.delete('/:id', { schema: deleted }, productsCtrl.delete);
  fastify.put('/:id', { schema: update }, productsCtrl.update);
  fastify.post('/', { schema: create }, productsCtrl.create);
};
