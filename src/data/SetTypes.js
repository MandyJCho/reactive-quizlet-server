export default
`
input SetInput {
  id: ID!,
  title: String!,
  compKey: String!
}

type Set {
  id: ID!
  title: String!

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
  ): Set
}

type Query {
  getSet(id: ID!): Set
}


`;