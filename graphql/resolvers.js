const {
  getTodo,
  saveTodo,
  updateTodo,
  removeTodo,
} = require('./database-query.js');

const resolvers = {
  Query: {
    Todos: (obj, arg) => {
      if (arg.id) {
        return getTodo(arg.id);
      } else {
        return getTodo();
      }
    },
  },
  Todo: {
    id: obj => {
      return obj._id;
    },
  },
  Mutation: {
    createTodo: async (obj, arg) => {
      if (arg.input) {
        return await saveTodo(arg.input);
      } else {
        return `Input Not Found.`;
      }
    },
    updateTodo: (obj, arg) => {
      updateTodo(arg.id, arg.input);
      return `Todo with id ${arg.id} updated.`;
    },
    removeTodo: (obj, arg) => {
      removeTodo(arg.id);
      return `Todo with id ${arg.id} removed.`;
    },
  },
};

module.exports = resolvers;
