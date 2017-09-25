import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';

const app = document.getElementById('app')
console.log("hello")

ReactDOM.render(React.createElement(GraphiQL), app)
