// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");
// const { parseEther } = require("ethers/lib/utils");


// async function main() {
//   const Chaitscoin = await hre.ethers.getContractFactory("Chaitscoin");
//   const chaitscoin = await Chaitscoin.deploy();
//   await chaitscoin.deploy();

// await lock.deploy();

// console.log("Lock deployed to:", lock.address);

//   console.log("Chaitscoin deployed to:", chaitscoin.address);
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = parseEther("0.001");

  

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const hre = require("hardhat");
const { ethers } = hre;
const { parseEther } = require("ethers/lib/utils");

async function main() {
  const[deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: ", deployer.address);
  console.log("Account balance: ", (await deployer.getBalance()).toString());
  // Deploy Chaitscoin
  const Chaitscoin = await hre.ethers.getContractFactory("Chaitscoin");
  const chaitscoin = await Chaitscoin.deploy();
  
  await chaitscoin.deployed();
  console.log("Chaitscoin deployed to:", chaitscoin.address);

  // Deploy Lock
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = parseEther("0.001");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, {
    value: lockedAmount,
  });
  await lock.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )} ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
  const deployment = await chaitscoin.deployed({ gasLimit: 500000, gasPrice: 1000000000 }); // Adjust values as needed

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
