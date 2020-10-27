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

    async getExchangeRate(address){
        const RBTCExchangeRate =  await this.contract.methods._getExchangeRate(address).call();
        return RBTCExchangeRate; 
    }


}
module.exports = Crowdfunding;