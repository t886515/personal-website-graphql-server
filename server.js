const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const bodyParser = require('body-parser');
const schema = require('./graphql/schema');

const cors = require('cors');

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

graphQLServer.use(cors());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
graphQLServer.use('/graphiql', graphiqlExpress({endpointURL: '/graphqls'}))
