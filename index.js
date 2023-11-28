var starWarsNames = require("./starwars-names.json");
var environments = require("./environments.json");

const test = () => {
  return "jason";
};
module.exports = {
  all: starWarsNames,
  test,
  environments,
};
