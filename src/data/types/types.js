import { print } from 'graphql/language/printer';

import set from './SetTypes.graphql';
import card from './CardTypes.graphql';

export default [
  print(set),
  print(card)
];
