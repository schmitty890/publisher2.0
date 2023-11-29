// var expect = require("chai").expect;
import mocha from "chai";
// var mainConfig = require("../index");
// var mainConfig = require("../index.js");
import mainConfig from "../index.js";
import environments from "../environments.js";

// Repliweb environment test suite
describe("Environment tests", function () {
  describe("Environment names", function () {
    it("SIT1 environment name", function () {
      mocha.expect(environments.env.SIT1.name).to.eql("SIT1/PL1");
    });
    it("SIT1 environment url", function () {
      mocha.expect(environments.env.SIT1.url).to.eql("sit1.com");
    });
    // SIT2
    it("SIT2 environment name", function () {
      mocha.expect(environments.env.SIT2.name).to.eql("SIT2/PL2");
    });
    it("SIT2 environment url", function () {
      mocha.expect(environments.env.SIT2.url).to.eql("sit2.com");
    });
  });
  describe("Environment repliweb paths", function () {
    it("SIT1 environment url", function () {
      mocha.expect(environments.env.SIT1.url).to.eql("sit1.com");
    });
    // SIT2
    it("SIT2 environment url", function () {
      mocha.expect(environments.env.SIT2.url).to.eql("sit2.com");
    });
  });
});

// Release configuration test suite
describe("CSS Releases tests", function () {
  describe("Release configurations", function () {
    it("Release configuration test", function () {
      mocha.expect(mainConfig.releases.release).to.eql([
        {
          name: "MAR_24",
          date: "03.14.24",
          releaseBranch: "release/03.14.24",
          lowerLaneEnvironments: [environments.env.SIT1.url],
        },
        {
          name: "FEB_24",
          date: "02.12.24",
          releaseBranch: "release/04.12.24",
          lowerLaneEnvironments: [environments.env.SIT2.url],
        },
        {
          name: "DEC_23",
          date: "12.09.23",
          releaseBranch: "release/12.09.23",
          lowerLaneEnvironments: [environments.env.SIT1.url],
        },
      ]);
    });
  });
});
