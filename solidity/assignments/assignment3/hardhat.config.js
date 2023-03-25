require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true, // Enable the Solidity optimizer (default: false)
        runs: 200, // Optimize for 200 runs (default: 200)
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
    goerli: {
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
