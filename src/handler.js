/* eslint-disable func-call-spacing,no-spaced-func,import/first */
require ('dotenv').config({ path: '../configs/.env' });

import { makeExecutableSchema } from 'graphql-tools';
import { graphqlLambda } from 'apollo-server-lambda';
import { lambdaPlayground } from 'graphql-playground-middleware';

import typeDefs from './data/SetTypes';
import resolvers from './dynamo/SetResolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: console
});

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }

  const handler = graphqlLambda({ schema });
  return handler(event, context, callbackFilter);
};

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = lambdaPlayground({
  endpoint: process.env.GRAPHQL_ENDPOINT
    ? process.env.GRAPHQL_ENDPOINT
    : '/prod/graphql'
});
