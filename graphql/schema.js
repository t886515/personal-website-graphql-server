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
  createTodo(input:CreateTodoInput): String
  updateTodo(id:String!, input:UpdateTodoInput): String
}

type CreateTodoInput {
  value: String
  notes: String
  isCompete: Boolean
}

type UpdateTodoInput {
  id: String
  value: String
  notes: String
  isComplete: Boolean
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
