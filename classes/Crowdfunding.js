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

    getDacIds(){
        return this.contract.methods.getDacIds().call();
    }
    getCampaignIds(){
        return this.contract.methods.getCampaignIds().call();
    }
    getMilestoneIds(){
        return this.contract.methods.getMilestoneIds().call();
    }

    
    getDac(_id){
        return this.contract.methods.getDac(_id).call();
    }
    getCampaign(_id){
        return this.contract.methods.getCampaign(_id).call();
    }
    getMilestone(_id){
        return this.contract.methods.getMilestone(_id).call();
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