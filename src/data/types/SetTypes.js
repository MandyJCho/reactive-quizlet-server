import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

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

export default `
  type Set implements Entity{
    id: ID!
    title: String!
    cards: [CardTypes]!
    compKey: String!
  }
  
  
  type Query {
    sets: [Set]
    set(id: ID!): Set
  }
  
  type Mutation {
    createSet(): Set
    updateSet(): Set
    deleteSet(): Set
  }
  
`



