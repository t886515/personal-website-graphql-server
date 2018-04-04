const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers.js');

const typeDefs = `

type Query {
  Todos(id:String): [Todo]
}

type Todo {
  id: String
  value: String
  notes: String
  isComplete: Boolean
  createDate: String
  updateDate: String
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
