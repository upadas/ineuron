pragma solidity ^0.4.17;

contract Hello {
    string public message;

    function Inbox (string InitialMessage) public {
        message = InitialMessage;
    }

    function setMessage (string newMessage) public {
        message = newMessage;
    }

    function getMessage () public view returns (string) {
        return message;
    }
}
contract MyContract {
    // ...
}