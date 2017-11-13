export default `
  input CardInput {
    term: String
    definition: String
  }
 
  type Query {
    getCard(id: ID!): Card
  }
  
  type Mutation {
    cardCreate(
      owner: Set,
      input: CardInput
    ): Card
    
    cardUpdate(
      id: Set!
      term: String
      definition: String
    ): Card
    
    cardDelete(
      id: ID!
    ): Card
  } 
`;
