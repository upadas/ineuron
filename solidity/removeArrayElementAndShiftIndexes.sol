/**
@title: Remove an element from an array and shift elements
@author: Sasibhushan Upadrasta
@notice: moveIndexes - Readjusts the element indexes after an element is deleted 
@dev: Remove array element by shifting elements from right to left remove(n) in the comments below indicates remove elements from the nth index of the array
Expected O/P:
[1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]
[1, 2, 3, 4, 5, 6] -- remove(2) --> [1, 2, 4, 5, 6, 6] --> [1, 2, 4, 5, 6]
[1, 2, 3, 4, 5, 6] -- remove(0) --> [2, 3, 4, 5, 6, 6] --> [2, 3, 4, 5, 6]
[1] -- remove(0) --> [1] --> []
@param: None
@return: Not expected to return anything - operations are on the state variable array
*/

//  SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract RemoveArrayElement {
    // uint[] public nums = [1, 2, 3] ;
    uint[] public nums = [1, 2, 3, 4, 5, 6] ;
    // uint[] public nums = [1] ;

    function getData()  public view returns (uint[] memory) {
        return nums;
    }

    function getNumsLength()  public view returns (uint) {
        return nums.length;
    }

    function removeElementAtIndex(uint index) public {
        delete nums[index];
    }

    function moveIndexes() public {
        for (uint j=0; j < nums.length ; j++){
            //Last element gets to pop as delete won't work - good for single element arrays too
            if (j == nums.length-1){
                nums.pop();
            }
            else if (nums[j] == 0) { 
                nums[j] = nums[j+1];
                delete nums[j+1];
            }
        }
    }
}
