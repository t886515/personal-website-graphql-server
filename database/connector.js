const Mongoose = require('mongoose');
const { ToDoSchema } = require('./schema');
Mongoose.Pormise = global.Promise;

const dialogueTitle = '[MongoDB]';

const dbUrl = 'mongodb://localhost:27017/todolist';
Mongoose.connect(dbUrl)
  .then(() => {
    console.log(`${dialogueTitle} Connection Established.`);
  })
  .catch(e => {
    console.error(`${dialogueTitle} Connection Failed: ${e}.`);
  });

const ToDoModel = Mongoose.model('ToDoItem', ToDoSchema);

module.exports = {
  ToDoModel
};
