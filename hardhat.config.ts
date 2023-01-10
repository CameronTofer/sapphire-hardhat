import { HardhatUserConfig } from "hardhat/config";
import '@oasisprotocol/sapphire-hardhat';
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    sapphire: {
      // This is Testnet! If you want Mainnet, add a new network config item.
      url: "https://testnet.sapphire.oasis.dev",
      accounts: ["3a25e6bd3fd26678e67b0aa29bb04b6890e355dbba41a4b6d930844f449198bd"],
      chainId: 0x5aff,
    },
  },  
};

export default config;
