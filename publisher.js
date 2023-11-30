console.log("publisher.js");
import releaseSchedule from "./releases.js";

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

  publishLowerLaneEnvironment(release) {
    const theRelease = release.releaseToPublish;
    const releaseDetails = (theRelease) =>
      releaseSchedule.release.find((element) => element.name === theRelease);
    console.log(releaseDetails(theRelease));
  }
}

export const { publishLowerLaneEnvironment } = new publisher();
