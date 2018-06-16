const Mongoose = require('mongoose');
const { JournalSchema, CommentSchema } = require('./schema');
Mongoose.Pormise = global.Promise;

const dialogueTitle = '[MongoDB]';

const dbUrl = 'mongodb://localhost:27017/journals';
Mongoose.connect(dbUrl)
  .then(() => {
    console.log(`${dialogueTitle} Connection Established.`);
  })
  .catch(e => {
    console.error(`${dialogueTitle} Connection Failed: ${e}.`);
  });

const JournalModel = Mongoose.model('Journal', JournalSchema);
const CommentModel = Mongoose.model('Comment', CommentSchema);

module.exports = {
  JournalModel,
  CommentModel,
};
