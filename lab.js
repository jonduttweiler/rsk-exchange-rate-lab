require('dotenv').config()
const { getWeb3 } = require("./helpers/web3/testnet");
const { printNetworkInfo } = require("./helpers/network");

const web3 = getWeb3();
printNetworkInfo(web3);


