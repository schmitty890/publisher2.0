/**
 * environments are the different repliweb environments the engineering team create overtime
 * when a new environment is added, add it to this environments object to keep all the
 * environment info in one place
 */
const environments = {
  title: "Environments for GWIM CSS publishing",
  description:
    "All repliweb GWIM CSS publishing environments are configured here",
  env: {
    SIT1: {
      name: "SIT1/PL1",
      url: "sit1.com",
    },
    SIT2: {
      name: "SIT2/PL2",
      url: "sit2.com",
    },
  },
};

export default environments;
