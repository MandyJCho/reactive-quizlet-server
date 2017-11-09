
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
      title: String!
      cards: [CardTypes]!
      compKey: String!
    }
  `;

export const SetMutations = `
  type Mutation {
    setCreate(
      id: String!
      title: String!
      compKey: String!
    ): Set
    
    setUpdate(
      id: String!
      title: String!
    ): Set
    
    setDelete(
      id: String!
    ): Set
  }
`;

export default `
  input SetInput {
    id: ID!,
    title: String!,
    compKey: String!
  }
  
  type Set {
      id: ID!
      title: String!
      cards: [CardTypes]!
      compKey: String!
  }
  
  type Mutation {
    setCreate(
      input: SetInput
    ): Set
    
    setUpdate(
      id: ID!,
      input: SetInput
    ): Set
    
    setDelete(
      id: ID!
    )
  }
  
  type Query {
    getSet(id: ID!)
  }
`;
