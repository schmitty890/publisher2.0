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

// describe("main category of tests", function () {
//   describe("name of test", function () {
//     it("should be a equal to jason", function () {
//       expect(starWars.test()).to.equal("jason");
//     });
//   });
// });

describe("CSS Environment tests", function () {
  describe("environment configurations", function () {
    it("should have the correct environment configurations", function () {
      expect(starWars.environments.env).to.include.deep.members([
        {
          SIT1: "SIT1/PL1",
          url: "sit1.com",
        },
        {
          SIT2: "SIT2/PL2",
          url: "sit2.com",
        },
      ]);
    });
  });
});
