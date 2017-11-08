import generateQuery from '../../../utils/generateQuery';

export const CardType = `
  type Card implements Entity {
    id: String!
    owner: Set!
    term: String
    definition: String
    compKey: String!
  }
`;

export const CardMutations = `
  type Mutation {
  cardCreate(
    id: String!
    owner: Set!
    term: String
    definition: String
    compKey: String!
  ): Card
  
  cardUpdate(
    id: String!
    term: String
    definition: String
  ): Card
  
  
  cardDelete(
    id: String!
  ): Card
  
 }
`;

export const CardQuery = generateQuery('EntityInterface', 'Card');
