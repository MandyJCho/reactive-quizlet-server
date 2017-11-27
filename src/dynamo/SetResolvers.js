import * as mapper from './dynamo';

const tableName = process.env.TABLE_SET;

export function setGet(id) {
  return mapper.getItem({
    tableName,
    Key: {
      id
    },
    AttributesToGet:
      [
        'id',
        'Title',
        'compKey'
      ]
  });
}

export function setCreate(args) {
  return mapper.createItem();
}

export default {
  Query: {
    set: (_, args) => setGet(args)
  }
};
