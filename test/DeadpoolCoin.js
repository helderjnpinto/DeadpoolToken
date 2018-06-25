var DeadpoolCoin = artifacts.require("./DeadpoolCoin.sol");

contract('DeadpoolCoin', function(accounts) {
  var tokenInstance;

  it('initializes the contract with the correct values', function() {
    return DeadpoolCoin.deployed().then(function(instance) {
      tokenInstance = instance;
      // console.log('​tokenInstance', tokenInstance);
      return tokenInstance.name();
    }).then(function(name) {
      console.log('​name', name);
      assert.equal(name, 'THE DEAD COIN', 'has the correct name')
    });
    //   assert.equal(name, 'DApp Token', 'has the correct name');
    //   return tokenInstance.symbol();
    // }).then(function(symbol) {
    //   assert.equal(symbol, 'DAPP', 'has the correct symbol');
    //   return tokenInstance.standard();
    // }).then(function(standard) {
    //   assert.equal(standard, 'DApp Token v1.0', 'has the correct standard');
    // });
  })
 
});
