## How to use
This project aims to serve as a starting point to interact with some smart contracts deployed in RSK Testnet belonging to the [EFEM project](https://github.com/ACDI-Argentina/efem-aragon-apps/tree/efem-dev/apps/crowdfunding).

Before start, generate an account as is indicated on [RSK developers portal](https://developers.rsk.co/tutorials/deploy-smart-contracts/). For this you maybe want to use the [BIP39 generator](https://iancoleman.io/bip39/).

Then create an .env file with the following content:
````
MNEMONIC="put your mnemonic words here ...."
````

This is needed for the web3 provider. Here I'm using  [@truffle/hdwallet-provider](https://www.npmjs.com/package/@truffle/hdwallet-provider)
If you need sign transactions, you will surely need funds in your account. You can get these using [faucet](https://faucet.rsk.co/)

At that point you can run scripts with
````
nodemon app.js
````
or 
````
nodemon lab.js
````

