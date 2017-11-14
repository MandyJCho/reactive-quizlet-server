require('dotenv').config({path: '../../configs/.env'});

// create document client
import aws from 'aws-sdk';
import dynogels from 'dynogels-promisified';

dynogels.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
});

// utils
export function uuid() {
  return dynogels.types.uuid();
}

export function define(type, attributes, tableName) {
  return dynogels.define(type, attributes, tableName);
}

// CREATE

// READ

// UPDATE

// DELETE