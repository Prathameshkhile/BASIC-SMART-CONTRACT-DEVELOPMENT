// Import Hardhat runtime environment
const { ethers } = require("hardhat");

async function main() {
  // Get the deployer's account address from the Hardhat network
  const [deployer] = await ethers.getSigners();

  // Log the deployer's address
  console.log("Deploying contracts with the account:", deployer.address);

  // Log the deployer's balance
  console.log("Deployer balance:", (await deployer.getBalance()).toString());

  // Compile and deploy the MyToken contract
  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy();

  // Wait for the deployment to be mined
  await token.deployed();

  // Log the deployed contract's address
  console.log("Token deployed to:", token.address);
}

// Execute the script and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
