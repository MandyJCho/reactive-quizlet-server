import { GraphQLInterfaceType,
  GraphQLString
} from 'graphql'

const EntityType = new GraphQLInterfaceType({
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

export default EntityType
