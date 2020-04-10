require('colors');
const { data } = require('./data');
const mongoose = require('mongoose');
const { database } = require('../config');
const { ProductModel } = require('../src/app/models');

mongoose.set('bufferCommands', false);
mongoose.Promise = global.Promise;

(async function Seed() {
  try {
    await mongoose.connect(database.url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(`We connected database succesfully ==> ${database.url}\n`);

    try {
      await ProductModel.create(data);
      console.log(`Succesfully 50 products created :)`.green);
    } catch (err) {
      console.error(
        'Something went bad in the process to create the database!'.red,
        err
      );
    }
    mongoose.disconnect();
  } catch (error) {
    console.error(
      `We cannot connect to database ==> ${database.url}\n`.red,
      error
    );
  }
})();
