import AWS from 'aws-sdk';
import Promise from 'bluebird';

const dynamo = new AWS.DynamoDB.DocumentClient();

// CREATE
export function create(args) {
  return new Promise((resolve, reject) =>
    dynamo.put(args).promise()
      .then(resolve)
      .catch(reject)
  );
}

// READ
export function get(args) {
  return new Promise((resolve, reject) =>
    dynamo.get(args).promise()
      .then(resolve)
      .catch(reject)
  );
}

// UPDATE

//
// // DELETE
// export function delete(args) {
//   return new Promise((resolve, reject) =>
//     dynamo.delete(args).promise()
//   );
// }