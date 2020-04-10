const { ProductsService } = require('../services');
const { customQuery } = require('../utils');

module.exports = {
  search: async (req, reply) => {
    const query = customQuery(req.query);
    const result = await ProductsService.search(query);
    reply.send(result);
  },
  get: async (req, reply) => {
    const result = await ProductsService.get(req.params.id);
    reply.send(result);
  },
  create: async (req, reply) => {
    const result = await ProductsService.create(req.body);
    reply.send(result);
  },
  delete: async (req, reply) => {
    const result = await ProductsService.delete(req.params.id);
    reply.send(result);
  },
  update: async (req, reply) => {
    const result = await ProductsService.update(req.params.id, req.body);
    reply.send(result);
  }
};
