const artifactDetails = require('../ArtifactDetails.json');
const path = require('path');
const logPath = path.join(__dirname, '../logs/development.log');

module.exports = {
  web: {
    artifact: artifactDetails,
    name: artifactDetails.name,
    version: artifactDetails.version,
    port: process.env.SERVER_PORT || 3050
  },
  database: {
    url: process.env.MONGODB_URL || 'mongodb://127.0.0.1/fastify-demo'
  },
  logger: {
    file: logPath,
    prettyPrint: {
      levelFirst: false,
      colorize: false,
      ignore: 'hostname',
      translateTime: 'yyyy-mm-dd HH:MM:ss'
    }
  },
  version: 'v1',
  swagger: {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Node Fastify API Rest',
        description:
          'Building a minimalist fast REST API with Node.js, Mongodb, Fastify and Swagger',
        version: '1.0.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:3050',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  },
  search: {
    pageOptions: {
      limit: 6,
      page: 1,
      sort: { createdAt: -1 }
    }
  }
};
