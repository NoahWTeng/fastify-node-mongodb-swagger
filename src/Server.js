require('colors');
const fastify = require('fastify');
const config = require('../config');

class Server {
  constructor() {
    this.fastify = fastify({
      logger: config.logger
    });

    this.fastify.decorate('config', config).register(require('./container'));
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
