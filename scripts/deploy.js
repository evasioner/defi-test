const hre = require("hardhat");

async function main() {
    const UniswapV2ERC20 = await ethers.getContractFactory("UniswapV2ERC20");
    const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
    const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    const UniswapV2Router02 = await ethers.getContractFactory("UniswapV2Router02");
 
    // Start deployment, returning a promise that resolves to a contract object
    const uniswap_v2_erc20 = await UniswapV2ERC20.deploy();   
    console.log("Contract deployed to address:", uniswap_v2_erc20.address);
    const uniswap_v2_factory = await UniswapV2Factory.deploy(uniswap_v2_erc20.address);   
    console.log("Contract deployed to address:", uniswap_v2_factory.address);
    const uniswap_v2_pair = await UniswapV2Pair.deploy();   
    console.log("Contract deployed to address:", uniswap_v2_pair.address);
    const uniswap_v2_router02 = await UniswapV2Router02.deploy(uniswap_v2_factory.address, hre.ethers.constants.AddressZero);   
    console.log("Contract deployed to address:", uniswap_v2_router02);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });