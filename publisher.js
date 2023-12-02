console.log("publisher.js");
import releaseSchedule from "./releases.js";
import repos from "./repos.js";
import { setDevOrProdDestinationSource } from "./utils.js";
import * as Utils from "./utils.js";

class publisher {
  aFuncFromPublisher(release) {
    // do something else
    console.log("aFuncFromPublisher");
    console.log(release);
    console.log(release.releaseToPublish);
    const theRelease = release.releaseToPublish;
    // console.log(releaseSchedule);
    const releaseDetails = (theRelease) =>
      releaseSchedule.release.find((element) => element.name === theRelease);
    console.log(releaseDetails(theRelease));
  }

  /**
   * get the details of the release the user picked
   */
  publishLowerLaneEnvironment(release) {
    const theRelease = release.releaseToPublish;
    const releaseDetails = (theRelease) =>
      releaseSchedule.release.find((element) => element.name === theRelease);
    // console.log(releaseDetails(theRelease));
  }

  /**
   * build theh files based off the release and repos the user selected
   * ex data: { release: 'DEC_23', repos: [ 'mgi', 'non_rwd' ] }
   * should build out files from theh december release branch for mgi and non_rwd repos
   */
  buildFiles = (data) => {
    console.log("build files");
    console.log(data);
    data.repos.forEach((repo) => {
      // console.log(repo, data.release);
      this.gitCheckoutReleaseBranch(repo, data.release, data.DEVELOPMENT);
    });
    console.log("ARE WE DONE?");
    return true;
  };

  /**
   * need target release (FEB_24) and repo name 'mgi'
   */
  gitCheckoutReleaseBranch = (repo, release, isDevelopment) => {
    console.log(`git checkout release branch for ${repo} for ${release}`);
    // console.log(releaseSchedule);
    const releaseDetails = releaseSchedule.release.find(
      (element) => element.name === release
    );

    const repoDetails = repos.repos.find((element) => element.name === repo);

    // change directories
    // console.log(process.chdir(repoDetails.cd));
    // message: successfully change directories to the correct repo
    // now run command
    //let checkoutBranch = child_process.execSync(`git checkout ${releaseDetails.releaseBranch}`)
    console.log(`git checkout ${releaseDetails.releaseBranch}`);

    // set environment to prod or development
    // setDevOrProdDestinationSource(isDevelopment, repoDetails);

    // console.log(repoDetails.cd);
    // // console.log(releaseDetails(release));
    // console.log(releaseDetails.releaseBranch);
    // console.log(repoDetails.bitbucketURL);
    // console.log(repoDetails.dest);
    // git checkout the release branch

    //now we have checked out the release branch, move on to git pull the latest
    this.gitPullReleaseBranch(releaseDetails, isDevelopment);
  };
  /**
   *
   */
  gitPullReleaseBranch = (releaseDetails, isDevelopment) => {
    // console.log("now we git pull");
    // let pullLatest = child_process.execSync(`git pull origin ${releaseDetails.releaseBranch}`)
    console.log(`git pull origin ${releaseDetails.releaseBranch}`);
    this.publishFiles(releaseDetails, isDevelopment);
  };

  publishFiles = (releaseDetails, isDevelopment) => {
    console.log(`npm run build`);
    // console.log(releaseDetails);
    // execute gulp command to build out files - command from npm package
    // let buildingFiles = child_process.execSync("npm run build");

    this.copyFilesToDestination(releaseDetails, isDevelopment);
  };

  copyFilesToDestination = (releaseDetails, isDevelopment) => {
    // const env = setDevOrProdDestinationSource(isDevelopment, repoDetails);
    console.log(`publish files to destination`);
    console.log(releaseDetails);
    releaseDetails.lowerLaneEnvironments.forEach((env) => {
      console.log(`publishing to: ${env}`);
    });
    // try {

    // }catch(err) {
    //   console.error(err)
    // }
  };
}

export const { publishLowerLaneEnvironment, buildFiles } = new publisher();
