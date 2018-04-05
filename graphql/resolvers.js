const { getTodo, saveTodo, updateTodo } = require('./database-query.js');

const resolvers = {
  Query: {
    Todos: (obj, arg) => {
      if (arg.id) {
        return getTodo(arg.id);
      } else {
        return getTodo();
      }
    }
  },
  Todo: {
    id: obj => {
      return obj._id;
    },
    value: obj => {
      return obj.value;
    },
    notes: obj => {
      return obj.notes;
    },
    isComplete: obj => {
      return obj.isComplete;
    },
    createDate: obj => {
      return obj.createDate;
    },
    updateDate: obj => {
      return obj.updateDate;
    }
  },
  Mutation: {
    createTodo: (obj, arg) => {
      if (arg.input) {
        saveTodo(arg.input);
        return `Todo Saved.`;
      } else {
        return `Input Not Found.`;
      }
    },
    updateTodo: (obj, arg) => {
      if (arg.input) {
        updateTodo(arg.input);
        return `Todo Updated.`;
      } else {
        return `Input Not Found.`;
      }
    }
  }
  // CreateTodoInput: {
  //   value:
  // },
  // UpdateTodoInput: {}
};

module.exports = resolvers;
