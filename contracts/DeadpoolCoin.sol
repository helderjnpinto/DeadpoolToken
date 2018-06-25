pragma solidity 0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract DeadpoolCoin is MintableToken {
    string public name = "THE DEAD COIN";
    string public symbol = "DC";
    uint8 public decimals = 18;

}