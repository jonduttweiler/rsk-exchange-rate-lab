const Web3 = require("web3");

function getWeb3() {
    const network = "http://localhost:4444";
    const provider = new Web3.providers.HttpProvider(network);
    const web3 = new Web3(provider);
    return web3;
}

module.exports = {
    getWeb3
}
