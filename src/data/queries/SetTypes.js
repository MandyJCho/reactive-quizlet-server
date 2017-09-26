import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import { EntityType } from './interfaces';
import {CardType} from './CardTypes';


/* Set Type
*
*  type Set {
*  id: ID!
*  title: String!
*  cards: [CardTypes]!
*  compKey: String!
*  }
*
* */
export const SetType = new GraphQLObjectType({
  name: 'Set',
  description: 'Study set a user creates',
  interfaces: [EntityType],
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    id: { type: new GraphQLNonNull(GraphQLID) },
    cards: { type: new GraphQLList(CardType) },
    compKey: {type: new GraphQLNonNull(GraphQLString) },
  }
});

export function SetResolver(_, args, context) {
  if (args.id) {
    // return everything
  }


}
// might need an inline fragment since i use an interface
export const SetQuery = new GraphQLObjectType({
  name: 'Set Query',
  description: 'Retrieves all sets unless specified',
  type: new GraphQLList(SetType),
  args: {
    id: {
      type: GraphQLID,
      defaultValue: null,
    }
  },
  setResolver
});

