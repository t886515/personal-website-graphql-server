const Mongoose = require('mongoose');
const { pipe, getParams } = require('./helper');
const {
  saveTodo,
  updateTodo,
  getTodo
} = require('./graphql/database-query.js');

const x = pipe(getParams, saveTodo);

x()
  .then(() => {
    Mongoose.disconnect();
    console.log(`Mongo database succesfully closed`);
    process.exit(0);
  })
  .catch(e => {
    Mongoose.disconnect();
    console.log(`[Something went wrong]: ${e}`);
    process.exit(1);
  });
