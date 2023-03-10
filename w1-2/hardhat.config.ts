import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
const { API_URL, GOERLI_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "YMVG3IS6ZNAWPXRBXIU86AY2DK6Z8TSD5F",
  },
  networks: {
    goerli: {
      url: API_URL,
      accounts: [GOERLI_PRIVATE_KEY as string],
    },
  },
};

export default config;
