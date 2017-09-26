import { GraphQLInterfaceType,
  GraphQLString
} from 'graphql'

export const EntityType = new GraphQLInterfaceType({
  name: 'Entity',
  fields: {
    name: GraphQLString,
    id: GraphQLString,
    compKey: {
      type: GraphQLString,
      description: 'component key for to feed an iterator'
    }
  },
  resolveType: {}
})
