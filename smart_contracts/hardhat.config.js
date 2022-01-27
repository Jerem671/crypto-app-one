//https://eth-ropsten.alchemyapi.io/v2/YpNKQN-sSX-Uerg1JuH8JLA1s7GYbge7
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/YpNKQN-sSX-Uerg1JuH8JLA1s7GYbge7",
      accounts: [
        "38bfea4a3ba7258fd84b7a02948a2b6d82790bca13daf845b1e0d2760aeeafa4",
      ],
    },
  },
};
