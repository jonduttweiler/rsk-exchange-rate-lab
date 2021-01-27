const { getWeb3 } = require("./helpers/web3/testnet");
const IPriceProvider = require("./classes/IPriceProvider");


const web3 = getWeb3();

const providers = [
    "0x2B54819531B7126bDEE2CeFDD9c5342d6c307595",
    "0x01a165cC33Ff8Bd0457377379962232886be3DE6",
    "0x9d4b2c05818A0086e641437fcb64ab6098c7BbEc",
    "0x2d39Cc54dc44FF27aD23A91a9B5fd750dae4B218",
    "0x667bd3d048FaEBb85bAa0E9f9D87cF4c8CDFE849",
    "0x2d39Cc54dc44FF27aD23A91a9B5fd750dae4B218",
    "0x26a00aF444928d689DDEC7b4D17c0E4a8c9D407d"
].forEach( async provider => {
    
    const iPriceProvider = new IPriceProvider(web3,provider);
    const {'0':price,'1':hasPrice} = await iPriceProvider.peek();
    console.log(`${provider} hasPrice: ${hasPrice}`,web3.utils.fromWei(price) ,"USD")
    

})

console.log(providers)