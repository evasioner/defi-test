pragma solidity =0.5.16;

import '../StarFiV1ERC20.sol';

contract ERC20 is StarFiV1ERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
