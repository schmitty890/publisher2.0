import { askWhichRelease, doAnotherThing } from "./questions.js";
import { aFuncFromPublisher } from "./publisher.js";

// dataObj holds all the info the user enters via the prompts combined with configuration settings
const dataObj = {};
// console.log(releases);
const test = () => {
  return "jason";
};
console.log(test());

// ask questions here to get data back to know what

// what months environment do you want to update
// FEB_24 --> update feb 24 repliweb environments based off of the environment configuration for FEB_24
var whichRelease = await askWhichRelease(dataObj);
// console.log("whichRelease");
// console.log(whichRelease);

aFuncFromPublisher(whichRelease);

// { releaseToPublish: 'MAR_24' }
// now that we have which release to publish, we want to
// pull the latest from the release branch that is targeted for the releaseToPublish value (ex: MAR_24)

// build the files

// copy the files from the source to the destination  'desktop/repos/css-cli/rwd' --> '//repliweb.addressYOURVARIABLENAMEREFERENCED'

// create empty folders in certain repliweb environment
// create placeholder folders ex: FEB_24 folders in each correct place

// TODO: clone repo?
// select a repo to clone into this project. we do this to let the script cd into the repo, checkout the branch needed to be checked out and pulled the latest from to build the css files
// after clone run npm install

// TODO: add new release
// prompt the user for new release info and add it to the release object in releases.js as the first object
// example object of info to get and add
// {
//   name: "MAR_24",
//   date: "03.14.24",
//   releaseBranch: "release/03.14.24",
//   lowerLaneEnvironments: [environments.env.SIT1.url],
// }
