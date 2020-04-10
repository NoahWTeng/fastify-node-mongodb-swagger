const { customQuery } = require('../utils');

const ProductCtrl = fastify => {
  const { productService } = fastify;
  return {
    search: async (req, reply) => {
      const query = customQuery(req.query);
      const result = await productService.search(query);
      reply.send(result);
    },
    get: async (req, reply) => {
      const result = await productService.get(req.params.id);
      reply.send(result);
    },
    create: async (req, reply) => {
      const result = await productService.create(req.body);
      reply.send(result);
    },
    delete: async (req, reply) => {
      const result = await productService.delete(req.params.id);
      reply.send(result);
    },
    update: async (req, reply) => {
      const result = await productService.update(req.params.id, req.body);
      reply.send(result);
    }
  };
};
module.exports = ProductCtrl;
