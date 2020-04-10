require('colors');
const fastify = require('fastify');
const config = require('../config');
const { Mongodb, Services, Routes } = require('./plugins');

class Server {
  constructor() {
    this.fastify = fastify({
      logger: config.logger
    });

    this.fastify
      .decorate('config', config)
      .use(require('morgan')('dev'))
      .register(require('fastify-cors'))
      .register(require('fastify-compress'))
      .register(require('fastify-helmet'))
      .register(require('fastify-swagger'), config.swagger)
      .register(Mongodb)
      .register(Services)
      .register(Routes);
  }

  async start() {
    await this.fastify.ready();

    await this.fastify.listen(config.web.port, err => {
      if (err) {
        console.log('Error starting server:'.red, err);
        process.exit(1);
      }
      console.log(`Server start on Port: ${config.web.port}`.green);
    });
  }
}

module.exports = Server;
