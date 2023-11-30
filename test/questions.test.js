import mocha from "chai";
import { askWhichRelease, doAnotherThing } from "../questions.js";

// Questions test suite
/**
 * make sure questions get expected results
 */
describe("Question tests", function () {
  it("Get release test", async function () {
    const res = await askWhichRelease();
    mocha.expect(res).to.eql({ releaseToPublish: "DEC_23" });
  });
});
