import mocha from "chai";
import { askWhichRelease, doAnotherThing } from "../questions.js";

// Questions test suite
/**
 * make sure questions get expected results
 */
describe("Question tests", function () {
  it("Ask which release test", async function () {
    const res = await askWhichRelease();
    mocha.expect(res).to.eql("DEC_23");
  });
});
