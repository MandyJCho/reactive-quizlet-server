import { mergeTypes } from 'merge-graphql-schemas';

import set from './SetTypes';
import card from './CardTypes';

export default mergeTypes([
  card,
  set
]);