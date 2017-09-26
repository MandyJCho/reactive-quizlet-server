import {
  GraphQLObjectType,
  GraphQLInterfaceType,
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
    title: GraphQLString,
    id: GraphQLString,
    cards: { type: new GraphQLList(CardType) },
    compKey: GraphQLString
  }
});