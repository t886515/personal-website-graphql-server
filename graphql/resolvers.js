const { getTodo } = require('./database-query.js');

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
  }
  // Mutation: {}
};

module.exports = resolvers;
