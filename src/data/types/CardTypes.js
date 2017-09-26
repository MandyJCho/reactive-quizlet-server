import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { EntityType }  from './interfaces'

export const CardType = new GraphQLObjectType({
  name: 'Card',
  description: 'a flashcard within a set',
  interfaces: [EntityType],
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    term: (GraphQLString),
    definition: GraphQLString,
    compKey: GraphQLString
  }
});

export default `
  type Card implements Entity {
    id: ID!
    term: String
    definition: String
    compKey: String!
  }
`