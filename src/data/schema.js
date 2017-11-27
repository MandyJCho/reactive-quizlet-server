import { mergeTypes } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';

import set from './SetTypes';
import card from './CardTypes';

export default makeExecutableSchema({
  typeDefs: mergeTypes([
    card,
    set
  ])
});
