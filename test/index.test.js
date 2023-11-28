var expect = require("chai").expect;
var starWars = require("../index");

describe("starwars-names", function () {
  describe("all", function () {
    it("should be an array of strings", function () {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === "string";
        });
      }
    });

    it("should contain `Luke Skywalker`", function () {
      expect(starWars.all).to.include("Luke Skywalker");
    });
  });
});

describe("main category of tests", function () {
  describe("name of test", function () {
    it("should be a equal to jason", function () {
      expect(starWars.test()).to.equal("jason");
    });
  });
});
