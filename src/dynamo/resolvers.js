require('dotenv').config({path: '../../configs/.env'});

const Promise = require('bluebird');
const aws = require('aws-sdk');
const dynogels = require('dynogels');

dynogels.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
})
