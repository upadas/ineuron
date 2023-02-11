//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;


contract Fruits{
  string[] myFruits;
  function addFruits(string memory fruit) public {
    myFruits.push(fruit);
  }

  function updateFruit(uint256 index, string memory newFruit) public returns(bool){
    if (myFruits.length > index) {
      myFruits[index] = newFruit;
      return true;
    }
    return false;
  }

  function deleteFruit(uint index) public returns (bool){
    if(myFruits.length > index) {
      delete myFruits[index];
      true;
    }
    myFruits[index] = myFruits.pop();
    return false;
  }

  function getFruits() public view returns(string[] memory) {
    return myFruits;
  }
}