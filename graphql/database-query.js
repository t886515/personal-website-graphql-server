const { ToDoModel } = require('../database/connector.js');
const Mongoose = require('mongoose');
const moment = require('moment');

const dialogueTitle = '[Mongo Query]';

const saveTodo = data => {
  const { value, notes, isComplete } = data;
  const _createDate = moment();
  const createDate = _createDate.format('MMMM Do YYYY, h:mm:ss a');

  return (newTodoEntry = new ToDoModel({
    value,
    notes,
    isComplete,
    createDate,
    _createDate,
    updateDate: createDate,
    _updateDate: _createDate
  })
    .save()
    .then(() => {
      console.log(`${dialogueTitle} New Todo Saved.`);
    })
    .catch(e => {
      console.error(`${dialogueTitle} Failed to Save With: ${e}.`);
    }));
};

const updateTodo = data => {
  const { id, value, notes, isComplete } = data;
  const _updateDate = moment();
  const updateDate = _updateDate.format('MMMM Do YYYY, h:mm:ss a');

  return ToDoModel.update(
    { _id: id },
    { value, notes, isComplete, updateDate, _updateDate }
  )
    .then(() => {
      console.log('${dialogueTitle} Todo Updated.');
    })
    .catch(e => {
      console.error(`${dialogueTitle} Failed to Update With: ${e}.`);
    });
};
const getTodo = id => {
  if (id) {
    return ToDoModel.find({ id }).lean();
  } else {
    return ToDoModel.find({}).lean();
  }
};

module.exports = {
  saveTodo,
  updateTodo,
  getTodo
};
