module.exports =
{
  "extends": ["airbnb-standard"],
  "parser": "babel-eslint",
  "rules": {
    "space-before-function-paren": 0
/*  "graphql/template-strings": ["error", {
    "env": "apollo",
    "schemaJson": require("./src/data/schema.json")
    }]*/
  },
  "plugins": [
    "graphql"
  ]
};
