async function printNetworkInfo(web3) {
    if (!web3) {
        console.log("You should pass an instance of web3 with a provider as parameter")
        return;
    }
    const networkId = await web3.eth.net.getId();
    const block = await web3.eth.getBlockNumber();
    const gasPrice = await web3.eth.getGasPrice();

    console.log(`networkId: ${networkId}`)
    console.log(`    block: ${block}`)
    console.log(` gasPrice: ${gasPrice}`)

    console.log(`Account details`)
    const defaultAddress = await web3.eth.getAccounts();
    console.log(defaultAddress[0])
    const balance = await web3.eth.getBalance(defaultAddress[0]);
    console.log(`balance: ${web3.utils.fromWei(balance)} RBTC`);

}


module.exports = {
    printNetworkInfo
}