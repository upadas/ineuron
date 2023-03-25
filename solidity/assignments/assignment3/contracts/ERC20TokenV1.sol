// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{

    event Mint(address _account, uint _amount);
    event Burn(address _account, uint _amount);

    constructor() ERC20("My Token", "TKN") {
        _mint(msg.sender, 1000000*(10**uint(decimals()))); //mint new tokens in Wei
    }
}
