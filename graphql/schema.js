const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers.js');

const typeDefs = `

type Query {
  Journals(id:String): [Journal]
  Comments(id:String): [Comment]
}

type Journal {
  id: ID
  title: String
  author: String
  content: String
  createDate: String
  updateDate: String
  isPrivate: Boolean
  comments: [Comment]
}

type Comment {
  id: ID
  title: String,
  author: String,
  content: String,
  createDate: String,
  updateDate: String,
  isPrivate: Boolean,
}

type Mutation {
  CreateJournal(input:JournalInput): Journal
  UpdateJournal(id:String!, input:JournalInput): String
  RemoveJournal(id:String!): String
}

input JournalInput {
  title: String
  author: String
  content: String
  isPrivate: Boolean
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
