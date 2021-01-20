const fs = require("fs");
const path = require("path");
const abiPath = path.join(__dirname,"..","artifacts","IPriceProvider.json");


class IPriceProvider {
    constructor(web3,address){
        const jsonABI = fs.readFileSync(abiPath); 
        const {abi} = JSON.parse(jsonABI);
        const contract = new web3.eth.Contract(abi,address);
        this.contract = contract;
        this.web3 = web3;
    }

    async peek(){
        return await this.contract.methods.peek().call(); 
    }


}
module.exports = IPriceProvider;