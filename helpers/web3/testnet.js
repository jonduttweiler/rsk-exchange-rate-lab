require('dotenv').config()

const mnemonic = process.env.MNEMONIC;
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

function getWeb3() {
    const network = "https://public-node.testnet.rsk.co";
    const provider = new HDWalletProvider(mnemonic, network);
    const web3 = new Web3(provider);
    return web3;
}

module.exports= {
    getWeb3
}