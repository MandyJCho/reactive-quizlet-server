import { buildSchema } from 'graphql';

export default buildSchema(`
  input CardInput {
    term: String
    definition: String
  }

  type Card {
    id: ID!
    owner: ID!
    term: String
    definition: String
  }
  
  type Query {
    getCard(id: ID!): Card
  }
  
  type Mutation {
    cardCreate(
      owner: ID!,
      input: CardInput
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
  
`);
