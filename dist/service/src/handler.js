(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _graphqlTools = __webpack_require__(2);

var _SetTypes = __webpack_require__(3);

var _SetTypes2 = _interopRequireDefault(_SetTypes);

var _resolvers = __webpack_require__(4);

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable func-call-spacing,no-spaced-func,import/first */
__webpack_require__(0).config({ path: '../configs/.env' });

var _require = __webpack_require__(8),
    graphqlLambda = _require.graphqlLambda,
    graphiqlLambda = _require.graphiqlLambda;

var _require2 = __webpack_require__(9),
    lambdaPlayground = _require2.lambdaPlayground;

module.exports.hello = function (event, context, callback) {
  var response = {
    statusCode: 200,
    body: JSON.stringify({
      message: _SetTypes2.default,
      input: event
    })
  };

  callback(null, response);
};

var RQSchema = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _SetTypes2.default,
  resolvers: _resolvers2.default,
  logger: console
});

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
  function callbackFilter(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }

  var handler = graphqlLambda({ schema: RQSchema });
  return handler(event, context, callbackFilter);
};

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.graphiqlHandler = graphiqlLambda({
  endpointURL: process.env.REACT_APP_GRAPHQL_ENDPOINT ? process.env.GRAPHQL_ENDPOINT : '/production/graphql'
});

// for local endpointURL is /graphql and for prod it is /stage/graphql
exports.playgroundHandler = lambdaPlayground({
  endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT ? process.env.GRAPHQL_ENDPOINT : '/production/graphql'
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\ninput SetInput {\n  id: ID!,\n  title: String!,\n  compKey: String!\n}\n\ntype Set {\n  id: ID!\n  title: String!\n  cards: [CardTypes]!\n  compKey: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n\ntype Mutation {\n  setCreate(\n    input: SetInput\n  ): Set\n\n  setUpdate(\n    id: ID!,\n    input: SetInput\n  ): Set\n\n  setDelete(\n    id: ID!\n  ): Set\n}\n\ntype Query {\n  getSet(id: ID!): Set\n}\n\n";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Set = undefined;
exports.uuid = uuid;

var _awsSdk = __webpack_require__(5);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _dynogelsPromisified = __webpack_require__(6);

var _dynogelsPromisified2 = _interopRequireDefault(_dynogelsPromisified);

var _joi = __webpack_require__(7);

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
__webpack_require__(0).config({ path: '../configs/.env' });

_awsSdk2.default.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

// TODO: get security token
// http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html

_dynogelsPromisified2.default.dynamoDriver(new _awsSdk2.default.DynamoDB());

// utils
function uuid() {
  return _dynogelsPromisified2.default.types.uuid();
}

// Define tables
var Set = exports.Set = _dynogelsPromisified2.default.define('Set', {
  hashKey: 'id',
  timestamps: true,
  schema: {
    id: _dynogelsPromisified2.default.types.uuid(),
    title: _joi2.default.string(),
    compKey: _joi2.default.string()
  }
}, process.env.TABLE_SET);

// ADD

// READ

// UPDATE

// DELETE

exports.default = {
  Query: function Query() {
    console.log('run');
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("dynogels-promisified");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-lambda");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("graphql-playground-middleware");

/***/ })
/******/ ])));