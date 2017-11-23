/* eslint-disable func-call-spacing,no-spaced-func,import/first */
require ('dotenv').config({ path: '../configs/.env' });

import { makeExecutableSchema } from 'graphql-tools';
import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda';
import { lambdaPlayground } from 'graphql-playground-middleware';

import schema from './data/SetTypes';
import resolvers from './dynamo/resolvers';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Running v1',
      input: event
    })
  };

  callback(null, response);
};

const RQSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  logger: console
});

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }

  const handler = graphqlLambda({ schema: RQSchema });
  return handler(event, context, callbackFilter);
};

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.graphiqlHandler = graphiqlLambda({
  endpointURL: process.env.GRAPHQL_ENDPOINT
    ? process.env.GRAPHQL_ENDPOINT
    : '/prod/graphql'
});

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = lambdaPlayground({
  endpoint: process.env.GRAPHQL_ENDPOINT
    ? process.env.GRAPHQL_ENDPOINT
    : '/prod/graphql'
});
