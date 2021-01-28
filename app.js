const { getWeb3 } = require("./helpers/web3/testnet");

const Crowdfunding = require("./classes/Crowdfunding");
const ExchangeRateProvider = require("./classes/ExchangeRateProvider");
const IPriceProvider = require("./classes/IPriceProvider");
const { getAllEntities } = require("./helpers/crowdfunding/crowdfunding");


const addresses = {
    regtest: {
        crowdfunding: "0xa8251977Caf2E72c849929Fd03DEF2EdC1954B13",
        priceProxy: "0x7a59F7c2EDb957D769EeE327305147a4D65f18C4",
    },

    testnet: {
        crowdfunding:"0x589F5CBd598eA7e466662909F49c95a51664B3B0",
        priceProxy:"0x004067bF30d9E4e156239f9aD5806b7901A77348",
        exchangeRateProvider:"0x806e1C60a2d98de8776A3cC62DEfdA6DEd3fEf13",
        iPriceProvider:"0x26a00aF444928d689DDEC7b4D17c0E4a8c9D407d"  //obtenido directamente de moneyonchain/config.json
    }
}

const RBTCAddress = "0x0000000000000000000000000000000000000000";

async function init(){
    const network = "testnet";
    const web3 = getWeb3();
    console.log(network)

    //directo al price provider
    const iPriceProvider = new IPriceProvider(web3,addresses[network].iPriceProvider);
    const {'0':price,'1':hasPrice} = await iPriceProvider.peek();
    console.log(`priceProvider hasPrice: ${hasPrice}`)
    console.log(web3.utils.fromWei(price) ,"USD")

    
    const crowdfunding = new Crowdfunding(web3,addresses[network].crowdfunding);
    getAllEntities(crowdfunding)



/*     const exrAddress = await crowdfunding.getExchangeRateProvider();
    console.log(`Exchange Rate Provider:${exrAddress} `)

    try{
        const exrProvider = new ExchangeRateProvider(web3,exrAddress);
        await exrProvider.getBTCPrice()
        console.log("El exchange rate provider esta funcionando")
    } catch(err){
        console.log("El exchange rate provider no funciona")
        //console.log(err);
    }
    
    
 */
    /*
    const BTCExchangeRate = await crowdfunding.getExchangeRate(RBTCAddress);
    console.log(`[${new Date().toISOString()}] Exchange rate from Crowdfunding at ${network}: ${BTCExchangeRate}`) 
  */  
    
} 

init();

