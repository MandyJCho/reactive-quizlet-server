import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import EntityType from './interfaces'

export const Card = new GraphQLObjectType({
  name: 'Card',
  description: 'a flashcard within a set',
  interfaces: [EntityType],
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    term: { type: new GraphQLNonNull(GraphQLString) },
    definition: { type: new GraphQLNonNull(GraphQLString) },
    compKey: GraphQLString
  }
})

export const Set = new GraphQLObjectType({
  name: 'Set',
  description: 'Study set a user creates',
  interfaces: [EntityType],
  fields: {
    title: GraphQLString,
    id: GraphQLString,
    cards: { type: new GraphQLList(Card) },
    compKey: GraphQLString
  }
})
