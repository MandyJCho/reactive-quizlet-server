import {
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { EntityType }  from './interfaces'

export const CardType = new GraphQLObjectType({
  name: 'Card',
  description: 'a flashcard within a set',
  interfaces: [EntityType],
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    term: { type: new GraphQLNonNull(GraphQLString) },
    definition: { type: new GraphQLNonNull(GraphQLString) },
    compKey: GraphQLString
  }
});
