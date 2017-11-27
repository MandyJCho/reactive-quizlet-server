import AWS from 'aws-sdk';
import Promise from 'bluebird';

const dynamo = new AWS.DynamoDB.DocumentClient();

// CREATE
export function createItem(args) {
  return new Promise((resolve, reject) =>
    dynamo.put(args).promise()
      .then(resolve)
      .catch(reject));
}

// READ
export function getItem(args) {
  return new Promise((resolve, reject) =>
    dynamo.get(args).promise()
      .then(resolve)
      .catch(reject));
}

export function queryItems(args) {
  return new Promise((resolve, reject) =>
    dynamo.query(args).promise()
      .then(resolve)
      .catch(reject));
}

// UPDATE
export function updateItem(args) {
  return new Promise((resolve, reject) =>
    dynamo.update(args).promise()
      .then(resolve)
      .catch(reject));
}

// DELETE
export function deleteItem(args) {
  return new Promise((resolve, reject) =>
    dynamo.delete(args).promise()
      .then(resolve)
      .catch(reject));
}
