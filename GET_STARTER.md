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