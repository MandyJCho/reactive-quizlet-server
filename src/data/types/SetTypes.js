import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import generateQuery from '../../utils/generateQuery';

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

export const Set =
  `
   type Set implements Entity{
      id: ID!
      title: String!
      cards: [CardTypes]!
      compKey: String!
    }
  `;

export const SetMutations = `
  type Mutation {
    setCreate(
      id: ID!
      title: String!
      compKey: String!
    ): Set
    
    setUpdate(
      id: ID!
      title: String!
    ): Set
    
    setDelete(
      id: ID!
    ): Set
  }
`;

export const SetQuery = generateQuery('EntityInterface', 'set');
