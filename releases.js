import environments from "./environments.js";

const releases = {
  title: "releases",
  description: "a configuration object to configure release information",
  release: [
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
  ],
};

export default releases;