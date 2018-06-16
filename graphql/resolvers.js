const {
  saveJournal,
  updateJournal,
  getJournal,
  removeJournal,
} = require('./database-query.js');

const resolvers = {
  Query: {
    Journals: (obj, arg) => {
      if (arg.id) {
        return getJournal(arg.id);
      } else {
        return getJournal();
      }
    },
  },
  Journal: {
    id: obj => {
      return obj._id;
    },
  },
  Mutation: {
    CreateJournal: async (obj, arg) => {
      if (arg.input) {
        return await saveJournal(arg.input);
      } else {
        return `Input Not Found.`;
      }
    },
    UpdateJournal: (obj, arg) => {
      updateJournal(arg.id, arg.input);
      return `Todo with id ${arg.id} updated.`;
    },
    RemoveJournal: (obj, arg) => {
      removeJournal(arg.id);
      return `Todo with id ${arg.id} removed.`;
    },
  },
};

module.exports = resolvers;
