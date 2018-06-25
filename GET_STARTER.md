# secure sol math functions 
https://github.com/dapphub/ds-math/blob/master/src/math.sol


# start one project 
npm install -g ganache-cli
npm install -g truffle

mkdir my-ico && cd my-ico

truffle init

npm init -y
npm install -E openzeppelin-solidity
// see more in docs 
https://www.npmjs.com/package/zeppelin-solidity


// after create the sol files and new migration we can run the following commands 
truffle compile

truffle migrate 



// after migrate see the blocks mined
// open truffle console 
truffle console

-  get some data with web3 

purchaser = web3.eth.accounts[2]

// purchaser = web3.eth.accounts[2]
'0x683ae5bd747a488ef151a87ae6d65be3f3b7e586'

DeadpoolCoinCrowdsale.deployed().then(inst => { crowdsale = inst })
crowdsale.token().then(addr => { tokenAddress = addr } )

// tokenAddress
'0xc468e67470baa838f90311cc77cd74685404b9ad'

// create an instance of coin 
deadpoolInstance = DeadpoolCoin.at(tokenAddress)

// this will return the 'abi'


// change token ownership to crowdsale so it is able to mint tokens during crowdsale

deadpoolInstance.transferOwnership(crowdsale.address)

deadpoolInstance.balanceOf(purchaser).then(balance => balance.toString(10))
'0'
truffle(development)> 



// Buying Deadpool tokens

DeadpoolCoinCrowdsale.deployed().then(inst => inst.sendTransaction({ from: purchaser, value: web3.toWei(5, "ether")}))

// Check the amount of Deadpool tokens for purchaser again. It should have some now.

deadpoolInstance.balanceOf(purchaser).then(balance => purchaserGusTokenBalance = balance.toString(10))
'5000000000000000000000'
truffle(development)> 

// When we created our token we made it with 18 decimals, which the same as what ether has. That's a lot of zeros, let's display without the decimals:
> web3.fromWei(purchaserGusTokenBalance, "ether")
'5000'