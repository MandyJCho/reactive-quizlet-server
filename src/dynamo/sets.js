import Joi from 'joi';
import * as resolvers from './sets';

let set = resolvers.define(
  'Set',
  {
    hashKey: 'id',
    timestamps: true,
    schema: {
      id: resolvers.uuid(),
      title: Joi.string(),
      compKey: Joi.string(),
    }
  },
  process.env.TABLE_SET);
