import {
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLString
} from 'graphql'

export const EntityType = new GraphQLInterfaceType({
  name: 'Entity',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    compKey: {
      type: GraphQLString,
      description: 'component key for to feed an iterator'
    }
  },
  resolveType: {},
});

export default `
interface Entity {
  id: ID!
  compKey: String!
}
`
