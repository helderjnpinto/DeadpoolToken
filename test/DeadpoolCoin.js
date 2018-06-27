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

  })

  
  it("init the contract with async/wait functions ", async function() {
    let tokenInstance = await DeadpoolCoin.deployed();
    let name = await tokenInstance.name()
    console.log('name 2', name);
    assert.equal(name, 'THE DEAD COIN', 'has the correct name')
  });

  it("init the contract with async/wait + promises functions ", async function() {
    let tokenInstance = await DeadpoolCoin.deployed();
    
    tokenInstance.name().then(function(name) {
      console.log('name 2', name);
      assert.equal(name, 'THE DEAD COIN', 'has the correct name')
    })

  });


});
