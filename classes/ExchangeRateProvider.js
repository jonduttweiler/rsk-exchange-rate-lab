const fs = require("fs");
const path = require("path");
const abiPath = path.join(__dirname,"..","artifacts","ExchangeRateProvider.json");


class ExchangeRateProvider {
    constructor(web3,address){
        const jsonABI = fs.readFileSync(abiPath); 
        const {abi} = JSON.parse(jsonABI);
        const contract = new web3.eth.Contract(abi,address);
        this.contract = contract;
        this.web3 = web3;
    }

    async getExchangeRate(address){
        const RBTCExchangeRate =  await this.contract.methods.getExchangeRate(address).call();
        return RBTCExchangeRate; 
    }

    async getBTCPrice(){
        return await this.contract.methods.getBTCPrice().call();
    }


}
module.exports = ExchangeRateProvider;