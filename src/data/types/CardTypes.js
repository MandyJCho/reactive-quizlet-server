import generateQuery from '../../utils/generateQuery';

export const CardType = `
  type Card implements Entity {
    id: ID!
    owner: Set!
    term: String
    definition: String
    compKey: String!
  }
`;

export const CardMutations = `
  type Mutation {
  cardCreate(
    id: ID!
    owner: Set!
    term: String
    definition: String
    compKey: String!
  ): Card
  
  cardUpdate(
    id: ID!
    term: String
    definition: String
  ): Card
  
  
  cardDelete(
    id: ID!
  ): Card
  
 }
`;

export const CardQuery = generateQuery('EntityInterface', 'Card');
