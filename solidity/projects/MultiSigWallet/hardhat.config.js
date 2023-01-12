require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/TaCQysnkMhW6zh8i3PdPcXirpMCH9l9n",
      chainId: 5,
    },
    // etherscan: {
    //   apiKey: {
    //     goerli: process.env.ETHERSCAN_API_KEY,
    //   },
    // },
  },
  gasReporter: {
    enabled: true,
    currency: "INR",
    // coinmarketcap: process.env.COINMARKETCAP,
    coinmarketcap: "f72f027f-9917-4d27-9074-5831c9578d70",
    token: "matic",
    outputFile: "gasReports.txt",
    noColors: true,
  },
};
