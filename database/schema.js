const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
Mongoose.Promise = global.Promise;

const CommentSchema = new Schema({
  title: String,
  author: String,
  content: String,
  isPrivate: Boolean,
  createDate: Date,
  updateDate: Date,
});

const JournalSchema = new Schema({
  title: String,
  author: String,
  content: String,
  isPrivate: Boolean,
  createDate: Date,
  updateDate: Date,
  comments: [CommentSchema],
});

module.exports = {
  JournalSchema,
  CommentSchema,
};
