console.log("Utils");

class Utils {
  /**
   * set the destination environment to your local or repliweb
   */
  setDevOrProdDestinationSource(isDevelopment, repoDetails) {
    if (isDevelopment) {
      return (repoDetails.dest = repoDetails.localDest);
    } else {
      return (repoDetails.dest = repoDetails.prodDest);
    }
  }
}

export const { setDevOrProdDestinationSource } = new Utils();
