const Mongoose = require('mongoose');
const { ToDoSchema } = require('./schema');
Mongoose.Pormise = global.Pormise;

const dbUrl = 'mongodb://localhost:27017/todolist';
//changing the "todolist" to any name you want your db to be

Mongoose.connect(dbUrl);

const ToDoModel = Mongoose.model('ToDoItem', ToDoSchema);

module.exports = {
  ToDoModel
};
