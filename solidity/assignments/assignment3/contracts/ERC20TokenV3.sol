// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20TokenV3 is ERC20{

    address public owner;
    uint public price;
    event Mint(address _account, uint _amount);
    event Burn(address _account, uint _amount);
    event Allowance(address _account, uint _amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not Owner");
        _;
    }

    modifier nonReentrant() {
        bool locked;
        require(locked == false, "Cannot Reenter Method");
        locked = true;
        _;
    }
    constructor(uint _totalSupply, uint _price) ERC20("My Token", "TKN")  {
        _mint(msg.sender, _totalSupply*(10**uint(decimals()))); //mint new tokens in Wei
        owner = msg.sender;
        price = _price;
    }

    function mint(address _account, uint _amount) public onlyOwner returns (bool){
        require (_account != address(this) && _amount !=uint(0), "ERC20: Cannot mint");
        _mint(_account,_amount);
        // assert(account,amount);
        emit Mint(_account, _amount);
        return true;
    }

    function burn(address _account, uint _amount) public onlyOwner returns (bool){
        require (_account != address(this) && _amount != 0, "ERC20: Cannot burn");

        _burn(_account,_amount);
        // assert(account,amount);
        emit Burn(_account, _amount);
        return true;
    }
    function allowance(address _account, uint256 _amount) public onlyOwner returns (bool){
        require (_account != address(this) && _amount != 0, "ERC20: ");
        _spendAllowance(msg.sender, _account, _amount);
        emit Allowance(_account, _amount);
        return true;
    }

    function updatePrice(uint _newPrice) public onlyOwner {
        require (price != _newPrice, "Price same as old price");
        price = _newPrice;
    }

    function buy() external payable nonReentrant returns(bool){
        require(msg.sender.balance >= msg.value && msg.value >= 0, "Insufficient Balance in the Contract");
        (bool success, ) = address(this).call{value: msg.value }("");
        require(success,"Unsucessful buy attempt");
        uint _qty = msg.value/price ;
         _transfer(owner, msg.sender, _qty);
        return true;
    }
    
    function sell(uint _qty) external payable nonReentrant returns(bool){
        require(msg.sender != address(this) || msg.sender != address(0),  "Cannot sell ");
        require(balanceOf(msg.sender) >= _qty, "Not enough tokens to sell");
        _transfer(msg.sender, address(this), _qty);
        uint _value = _qty * price;
        (bool success, ) = msg.sender.call{value: _value }("");
        require(success,"Payment unsucessful");
        return true;
    }
    function withdraw(uint _amount) external payable onlyOwner nonReentrant returns(bool){
        require (_amount <= address(this).balance, "Insufficient Balance");
        (bool success, ) = owner.call{value: _amount }("");
        require(success,"Unsucessful withdrawl of funds");
        return(true);
    }
}
