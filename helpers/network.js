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
}

module.exports = {
    printNetworkInfo
}