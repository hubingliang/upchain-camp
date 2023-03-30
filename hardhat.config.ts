import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();
require("@openzeppelin/hardhat-upgrades");
const {
  POLYGON_MUMBAI_API_URL,
  GOERLI_API_URL,
  PRIVATE_KEY,
  ETHERSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: GOERLI_API_URL,
      accounts: [PRIVATE_KEY as string],
    },
    mumbai: {
      url: POLYGON_MUMBAI_API_URL,
      accounts: [PRIVATE_KEY as string],
    },
  },
};

export default config;
