const mongoose = require('mongoose');
const fp = require('fastify-plugin');

mongoose.set('bufferCommands', false);
mongoose.Promise = global.Promise;

async function mongodb(fastify) {
  try {
    // Connect mongoose
    const db = await mongoose.connect(fastify.config.database.url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    require('../../app/models');

    fastify.decorate('mongodb', db);

    console.log(
      `We connected database succesfully ==> ${fastify.config.database.url}\n`
        .green
    );
  } catch (error) {
    console.log(
      `We cannot connect to database: ${fastify.config.database.url}`.red
    );
    fastify.log.error(error);
  }
}

module.exports = fp(mongodb);
