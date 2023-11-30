import inquirer from "inquirer";
import releaseSchedule from "./releases.js";
import repos from "./repos.js";
class questions {
  /**
   * prompts user which release they want to publish files for
   * @param {Object} dataObj - the data object to store publisher data within
   * @return {Object} release ex: { releaseToPublish: 'FEB_24' }
   */
  async askWhichRelease() {
    const releaseNames = [];
    releaseSchedule.release.forEach((release) => {
      if (release.show) {
        releaseNames.push(release.name);
      }
    });
    // console.log(releaseNames);
    const getRelease = await inquirer.prompt([
      {
        type: "list",
        name: "releaseToPublish",
        message: "What release files do you want to publish?",
        choices: releaseNames,
      },
    ]);
    // console.log(getRelease.releaseToPublish);
    return getRelease.releaseToPublish;
  }

  /**
   * prompts user which release they want to publish files for
   * @param {Object} dataObj - the data object to store publisher data within
   * @return {Object} release ex: { releaseToPublish: 'FEB_24' }
   */
  async askWhichRepo() {
    const reposToPublish = [];
    repos.repos.forEach((repo) => {
      if (repo.show) {
        reposToPublish.push(repo.name);
      }
    });
    const getRepos = await inquirer.prompt([
      {
        type: "checkbox",
        name: "reposToPublish",
        message: "What repositories files do you want to publish?",
        choices: reposToPublish,
      },
    ]);
    return getRepos.reposToPublish;
  }

  doAnotherThing() {
    // do something else
    console.log(doAnotherThing);
  }
}

export const { askWhichRelease, askWhichRepo, doAnotherThing } =
  new questions();
