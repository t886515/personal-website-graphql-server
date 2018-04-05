const Mongoose = require('mongoose');
const { pipe, getParams } = require('./helper');
const {
  saveTodo,
  updateTodo,
  getTodo
} = require('./graphql/database-query.js');

const dialogueTitle = '[Save]';

const x = pipe(getParams, saveTodo);
x()
  .then(() => {
    Mongoose.disconnect();
    console.log(`${dialogueTitle} Mongo database succesfully closed`);
    process.exit(0);
  })
  .catch(e => {
    Mongoose.disconnect();
    console.log(`${dialogueTitle} ${e}`);
    process.exit(1);
  });
