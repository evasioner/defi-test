const hre = require("hardhat");

async function main() {
    // const StarFiV1ERC20 = await ethers.getContractFactory("StarFiV1ERC20");
    // const StarFiV1Factory = await ethers.getContractFactory("StarFiV1Factory");
    // const StarFiV1Pair = await ethers.getContractFactory("StarFiV1Pair");
    // const StarFiV1Router = await ethers.getContractFactory("StarFiV1Router");
    // const StarFiV1Migrator = await ethers.getContractFactory("StarFiV1Migrator");
 
    // // Start deployment, returning a promise that resolves to a contract object
    // const starfi_v1_erc20 = await StarFiV1ERC20.deploy();   
    // console.log("ERC20 Contract deployed to address:", starfi_v1_erc20.address);
    // const starfi_v1_factory = await StarFiV1Factory.deploy(starfi_v1_erc20.address);   
    // console.log("Factory Contract deployed to address:", starfi_v1_factory.address);
    // const starfi_v1_pair = await StarFiV1Pair.deploy();   
    // console.log("Pair Contract deployed to address:", starfi_v1_pair.address);
    // const starfi_v1_router = await StarFiV1Router.deploy(starfi_v1_factory.address, hre.ethers.constants.AddressZero);   
    // console.log("Router Contract deployed to address:", starfi_v1_router.address);
    // const starfi_v1_migrator = await StarFiV1Migrator.deploy("0x1cf2AefCcb6194eb006929B354ED57406f3A3B07", "0x5134c3aa292d98F02935eb0431aeDEdE97433c50");   
    // console.log("Router Contract deployed to address:", starfi_v1_migrator.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });