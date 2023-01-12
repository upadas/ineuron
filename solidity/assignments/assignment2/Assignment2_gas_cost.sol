//SPDX-License-Identifier:MIT
pragma solidity 0.8.6;

contract structure {

    struct Book{
        string title;
        string author;
        uint bookID;
        uint price;
    }

    // define a struct-name of the struct variable to represent the struct
    Book book;

    function setBook() public {
        book=Book("Blockchain for Beginners","iNeuron",4,1000);
    }
    // As we are returning the value of a storage property, its value is loaded from storage to memory (not to calldata). 
    // So you need to return string memory
    // function getAuthor() public view returns(string memory){
    //     return book.author;
    // }
    // function getTitle() public view returns(string memory){
    //     return book.title;
    // }

    // calldata is a read-only data location initialized in the function input
    function getAuthor(string calldata _author) public pure returns(string calldata){
        return _author;
    }

    // calldata is a read-only data location initialized in the function input
    function getTitle(string calldata _title) public pure returns(string calldata){
        return _title;
    }

    function getBookId() public view returns(uint){
        return book.bookID;
    }

    function getPrice() public view returns(uint){
        return book.price;
    }
}

