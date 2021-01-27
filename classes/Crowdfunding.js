const fs = require("fs");
const path = require("path");
const abiPath = path.join(__dirname,"..","artifacts","Crowdfunding.json");


class Crowdfunding {
    constructor(web3,address){
        const jsonABI = fs.readFileSync(abiPath); 
        const {abi} = JSON.parse(jsonABI);
        const contract = new web3.eth.Contract(abi,address);
        this.contract = contract;
        this.web3 = web3;
    }

    async getExchangeRateProvider(){
        return this.contract.methods.exchangeRateProvider().call();
    }

    async getExchangeRate(address){
        const RBTCExchangeRate =  await this.contract.methods._getExchangeRate(address).call();
        return RBTCExchangeRate; 
    }

    async setExchangeRateProvider(address,callee){
         await this.contract.methods.setExchangeRateProvider(address).send({from:callee, gas: 120000});
    }


}
module.exports = Crowdfunding;