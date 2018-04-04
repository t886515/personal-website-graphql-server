const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
Mongoose.Promise = global.Promise;

const ToDoSchema = new Schema({
  value: String,
  notes: String,
  isComplete: Boolean,
  createDate: Date,
  updateDate: Date
});

module.exports = {
  ToDoSchema
};
