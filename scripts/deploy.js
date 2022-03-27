const hre = require("hardhat");
const verify = require("@nomiclabs/hardhat-etherscan");

async function main() {
    const StarFiV1ERC20 = await ethers.getContractFactory("StarFiV1ERC20");
    const StarFiV1Factory = await ethers.getContractFactory("StarFiV1Factory");
    const StarFiV1Pair = await ethers.getContractFactory("StarFiV1Pair");
    const StarFiV1Router = await ethers.getContractFactory("StarFiV1Router");
 
    // Start deployment, returning a promise that resolves to a contract object
    const starfi_v1_erc20 = await StarFiV1ERC20.deploy();   
    console.log("Contract deployed to address:", starfi_v1_erc20.address);
    const starfi_v1_factory = await StarFiV1Factory.deploy(starfi_v1_erc20.address);   
    console.log("Contract deployed to address:", starfi_v1_factory.address);
    const starfi_v1_pair = await StarFiV1Pair.deploy();   
    console.log("Contract deployed to address:", starfi_v1_pair.address);
    const starfi_v1_router = await StarFiV1Router.deploy(starfi_v1_factory.address, hre.ethers.constants.AddressZero);   
    console.log("Contract deployed to address:", starfi_v1_router);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });