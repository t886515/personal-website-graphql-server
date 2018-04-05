const Mongoose = require('mongoose');
const { ToDoSchema } = require('./schema');
Mongoose.Pormise = global.Promise;
// console.log(global.Promise, '=====?');

const dbUrl = 'mongodb://localhost/todolist';
//changing the "todolist" to any name you want your db to be
Mongoose.connect(dbUrl)
  .then(() => {
    console.log('[Mongodb] Connection Established!]');
  })
  .catch(e => {
    console.error(`[Mongodb] Connection Failed: ${e}`);
  });

// const db = Mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(callback) {
//   console.log('connection to db open');
// });

const ToDoModel = Mongoose.model('ToDoItem', ToDoSchema);

module.exports = {
  ToDoModel
};
