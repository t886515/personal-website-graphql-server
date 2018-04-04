const { getTodo } = require('./database-query.js');

const resolvers = {
  Query: {
    Todos: async (obj, arg) => {
      if (arg.id) {
        let todos = getTodo(arg.id);
        return [todos];
      } else {
        let todos = getTodo();
        return [todos];
      }
    }
  },
  Todo: {
    id: obj => {
      return obj.id;
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
  }
};

module.exports = resolvers;
