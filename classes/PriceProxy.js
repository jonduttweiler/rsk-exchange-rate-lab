const fs = require("fs");
const path = require("path");
const abiPath = path.join(__dirname, "..", "artifacts", "PriceProxy.json");


class PriceProxy {
    constructor(web3, address) {
        const jsonABI = fs.readFileSync(abiPath);
        const { abi } = JSON.parse(jsonABI);
        const contract = new web3.eth.Contract(abi, address);
        this.contract = contract;
        this.web3 = web3;
    }

    async getBTCPriceFromMoC() {
        const btcPrice = await this.contract.methods.getBTCPriceFromMoC().call();
        return btcPrice;
    }

}
module.exports = PriceProxy;