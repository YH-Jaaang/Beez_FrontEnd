import { ethers } from "ethers";

const PROVIDER = ethers.getDefaultProvider(3, {
  infura: {
    projectId: "88ce7dc742a14dec85fde399eaf36090",
    //projectKey: "8192ef99b15c4a29bb58699e80ee79bf",
  },
});

export { PROVIDER };
