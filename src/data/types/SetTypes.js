import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { EntityType } from './interfaces';
import {CardType} from './CardTypes';

export const SetType = new GraphQLObjectType({
  name: 'Set',
  description: 'Study set a user creates',
  interfaces: [EntityType],
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: new GraphQLNonNull(GraphQLID) },
    cards: { type: new GraphQLList(CardType) },
    compKey: GraphQLString
  }
});