const { JournalModel } = require('../database/connector.js');
const Mongoose = require('mongoose');
const moment = require('moment');

const dialogueTitle = '[Mongo Query]';

const saveJournal = journalData => {
  const {
    title = 'Empty Title',
    author = 'Unknown Author',
    content = 'N/A',
    isPrivate = false,
  } = journalData;
  const createDate = moment();

  return (newJournalEntry = new JournalModel({
    title,
    author,
    content,
    isPrivate,
    createDate,
    updateDate: createDate,
    comments: [],
  })
    .save()
    .then(createdJournal => {
      console.log(`${dialogueTitle} New Journal Saved.`);
      return createdJournal;
    })
    .catch(e => {
      console.error(`${dialogueTitle} Failed to Save Journal With: ${e}.`);
    }));
};

const updateJournal = (id, journalData) => {
  const { title, author, content, isPrivate } = journalData;
  const updateDate = moment();

  return JournalModel.update(
    { _id: id },
    { title, author, content, isPrivate, updateDate },
  )
    .then(updatedJournal => {
      console.log(`${dialogueTitle} Journal Updated.`);
    })
    .catch(e => {
      console.error(`${dialogueTitle} Failed to Update Journal With: ${e}.`);
    });
};

const removeJournal = id => {
  return JournalModel.remove({ _id: id })
    .then(deleted => {
      console.log(`${dialogueTitle} Journal ${id} removed.`);
    })
    .catch(e => {
      console.log(`${dialogueTitle} Failed to Delete Journal With: ${e}.`);
    });
};

const getJournal = id => {
  if (id) {
    return JournalModel.find({ _id: id }).lean();
  } else {
    return JournalModel.find({}).lean();
  }
};

module.exports = {
  saveJournal,
  updateJournal,
  getJournal,
  removeJournal,
};
