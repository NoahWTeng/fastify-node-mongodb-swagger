const mongoose = require('mongoose');
const t = require('tap');
const { test } = t;
const supertest = require('supertest');

const { database } = require('../config');

test('mongoose db initialization', async t => {
  t.plan(2);

  mongooseConnection = await mongoose.createConnection(database.url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  t.ok(mongooseConnection);
  t.equal(mongooseConnection.readyState, 1, 'Ready state is connected(==1)');
});

test('teardown', async t => {
  await mongooseConnection.close();
});
