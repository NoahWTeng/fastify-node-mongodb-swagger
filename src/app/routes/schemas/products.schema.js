const search = {
  querystring: {
    type: 'object',
    properties: {
      query: { type: 'string' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              sku: { type: 'string' },
              name: { type: 'string' },
              price: { type: 'number' },
              quantity: { type: 'number' },
              isActive: { type: 'boolean' },
              description: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' }
            }
          }
        },
        total: { type: 'number' },
        limit: { type: 'number' },
        page: { type: 'number' },
        pages: { type: 'number' }
      }
    }
  }
};
const get = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        sku: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        quantity: { type: 'number' },
        isActive: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    }
  }
};

const create = {
  body: {
    type: 'object',
    required: ['name', 'price', 'sku', 'quantity'],
    properties: {
      name: { type: 'string' },
      price: { type: 'number' },
      sku: { type: 'string' },
      description: { type: 'string' },
      quantity: { type: 'number' },
      isActive: { type: 'boolean' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        sku: { type: 'string' },
        price: { type: 'number' },
        description: { type: 'string' },
        quantity: { type: 'number' },
        isActive: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    }
  }
};

const update = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      price: { type: 'number' },
      sku: { type: 'string' },
      description: { type: 'string' },
      quantity: { type: 'number' },
      isActive: { type: 'boolean' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        price: { type: 'number' },
        sku: { type: 'string' },
        description: { type: 'string' },
        quantity: { type: 'number' },
        isActive: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' }
      }
    }
  }
};

const deleted = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: { type: 'string' },
        deleted: { type: 'boolean' }
      }
    }
  }
};
module.exports = { search, get, create, update, deleted };
