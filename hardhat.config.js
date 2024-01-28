require("@nomicfoundation/hardhat-toolbox");

/** @type import type { HardhatUserConfig } from "hardhat/types"; */
const { ethers } = require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/.env' });
const apiKey = process.env.API_KEY;

module.exports = {
  solidity: {
    version: "0.8.20", // Minimum version
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
      // Configuration for the hardhat network
    },
    sepolia: {
      url: "enter repc node",
      accounts: ['enter pvt key'],// Wrap the private key in quotes
      gasPrice: 1000000000
    }
  },
};
