const {getWeb3} = require("./helpers/web3/testnet");

const Crowdfunding = require("./classes/Crowdfunding");
const PriceProxy = require("./classes/PriceProxy");

const addresses = {
    regtest: {
        crowdfunding: "0xa8251977Caf2E72c849929Fd03DEF2EdC1954B13",
        priceProxy: "0x7a59F7c2EDb957D769EeE327305147a4D65f18C4"
    },

    testnet: {
        crowdfunding:"0xe328A72D2bC5eeBa028Ec2539D6A8d576Fae3c51",
        priceProxy:"0x004067bF30d9E4e156239f9aD5806b7901A77348"
    }
}

const RBTCAddress = "0x0000000000000000000000000000000000000000";

async function init(){
    const network = "testnet";
    const web3 = getWeb3();
    const crowdfunding = new Crowdfunding(web3,addresses[network].crowdfunding);
    const BTCExchangeRate = await crowdfunding.getExchangeRate(RBTCAddress);
    console.log(`[${new Date().toISOString()}] Exchange rate from Crowdfunding at ${network}: ${BTCExchangeRate}`) 
 
    const priceProxy = new PriceProxy(web3,addresses[network].priceProxy);
    let btcPrice = await priceProxy.getBTCPriceFromMoC(); 
    console.log(`[${new Date().toISOString()}] BTC Price from MoC ${network}: ${btcPrice} wei USD - ${web3.utils.fromWei(btcPrice)} USD`) 
    
} 

init();


