import AWS from 'aws-sdk';
import dynogels from 'dynogels-promisified';
import Joi from 'joi';

// eslint-disable-next-line
require ('dotenv').config({ path: '../configs/.env' });

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// TODO: get security token
// http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html

dynogels.dynamoDriver(new AWS.DynamoDB());

// utils
export function uuid() {
  return dynogels.types.uuid();
}

// Define tables
export const Set = dynogels.define(
  'Set',
  {
    hashKey: 'id',
    timestamps: true,
    schema: {
      id: dynogels.types.uuid(),
      title: Joi.string(),
      compKey: Joi.string()
    }
  },
  process.env.TABLE_SET
);

// ADD

// READ

// UPDATE

// DELETE

export default {
  Query: () => {
    console.log('run');
  }
};
