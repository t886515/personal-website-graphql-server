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

type Mutation {
  createTodo(input:TodoInput): Todo
  updateTodo(id:String!, input:TodoInput): Todo
  removeTodo(id:String!): String
}

input TodoInput {
  value: String
  notes: String
  isComplete: Boolean
}


`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
