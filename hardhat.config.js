require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // Match OpenZeppelin version
      },
      {
        version: "0.8.17", // Optionally support other versions
      },
    ],
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Hardhat local network URL
    },
  },
};
