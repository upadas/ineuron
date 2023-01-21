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
    // mainnet: {
    //   url: `${process.env.INFURA_ETHEREUM_MAINNET_API}`,
    //   accounts: [process.env.MAIN_ACCOUNT],
    //   chainId: 1,
    // },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.MAIN_ACCOUNT],
      chainId: 5,
    },
    // mumbai: {
    //   url: `${process.env.INFURA_POLYGON_MUMBAI_API_URL}`,
    //   accounts: [process.env.MAIN_ACCOUNT],
    //   chainId: 80001,
    // },
  },
  gasReporter: {
    enabled: true,
    currency: "INR",
    coinmarketcap: process.env.COINMARKETCAP,
    token: "matic",
    outputFile: "gasReports.txt",
    noColors: true,
  },
};
