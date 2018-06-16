const Mongoose = require('mongoose');
const { pipe, getParams } = require('./helper');
const {
  saveJournal,
  updateJournal,
  getJournal,
  removeJournal,
} = require('./graphql/database-query.js');

const dialogueTitle = '[Save]';

const x = pipe(
  getParams,
  updateJournal,
);
x()
  .then(() => {
    Mongoose.disconnect();
    console.log(`${dialogueTitle} Mongo Database Disconnected.`);
    process.exit(0);
  })
  .catch(e => {
    Mongoose.disconnect();
    console.error(`${dialogueTitle} ${e}.`);
    process.exit(1);
  });
