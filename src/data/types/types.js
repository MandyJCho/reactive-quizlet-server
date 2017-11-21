<<<<<<< HEAD
import set from 'src/data/types/SetTypes';
import  card from 'src/data/types/CardTypes';
=======
import { print } from 'graphql/language/printer';

import set from './SetTypes.graphql';
import card from './CardTypes.graphql';
>>>>>>> dev

export default [
  print(set),
  print(card)
];
