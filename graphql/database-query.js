const { ToDoModel } = require('../database/connector.js');
const Mongoose = require('mongoose');
const moment = require('moment');

const saveTodo = data => {
  console.log(data);
  try {
    const { value, notes, isComplete } = data;
  } catch (e) {
    console.error(`Data passed down is missing prop: ${e}`);
  }
  const createDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  let newTodoEntry = new ToDoModel({
    value,
    notes,
    isComplete,
    createDate,
    updateDate: createDate
  })
    .save()
    .then(() => {
      console.log('[Todo entry saved]');
    })
    .catch(e => {
      console.error(`[Save Failed] ${e}`);
    });
};

const updateTodo = data => {
  try {
    const { id, value, notes, isComplete } = data;
  } catch (e) {
    console.error(`Data passed down is missing prop: ${e}`);
  }
  const updateDate = moment().format('MMMM Do YYYY, h:mm:ss a');

  ToDoModel.update({ _id: id }, { value, notes, isComplete, updateDate })
    .then(() => {
      console.log('[Todo entry updated]');
    })
    .catch(e => {
      console.error(`[Update Failed] ${e}`);
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
