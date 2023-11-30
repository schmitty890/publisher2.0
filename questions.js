import inquirer from "inquirer";
import releaseSchedule from "./releases.js";
class questions {
  /**
   * prompts user which release they want to publish files for
   * @param {Object} dataObj - the data object to store publisher data within
   * @return {Object} release ex: { releaseToPublish: 'FEB_24' }
   */
  async askWhichRelease(dataObj) {
    // some stuffs
    console.log("doSomething");

    const releaseNames = [];
    releaseSchedule.release.forEach((release) => {
      releaseNames.push(release.name);
    });
    console.log(releaseNames);
    const getRelease = await inquirer.prompt([
      {
        type: "list",
        name: "releaseToPublish",
        message: "What release files do you want to publish?",
        choices: releaseNames,
      },
    ]);
    dataObj = { ...dataObj, ...getRelease };
    console.log(typeof dataObj);
    return dataObj;
  }

  doAnotherThing() {
    // do something else
    console.log(doAnotherThing);
  }
}

export const { askWhichRelease, doAnotherThing } = new questions();
