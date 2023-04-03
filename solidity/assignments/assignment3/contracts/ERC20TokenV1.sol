// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ERC20TokenV1 is Initializable, ERC20Upgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(uint _totalSupply) public initializer {
        __ERC20_init("ERC20 Token", "TKN");
        _mint(msg.sender, _totalSupply);
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}



// import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
// import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// contract ERC20TokenV1 is IERC20Upgradeable,Initializable{

//     function initialize(address _owner, uint256 _totalSupply) public initializer {
//         require(_totalSupply > 0, "Total supply must be greater than 0");
//         IERC20Upgradeable.__ERC20_init("My ERC20 Token", "TKN");
//         IERC20Upgradeable._mint(_owner, _totalSupply * (10 ** uint256(IERC20Upgradeable.decimals())));
//     }

//     // constructor(uint _totalSupply) ERC20("My ERC20 Token", "TKN"){
//     //     _mint(msg.sender, _totalSupply*(10**uint(decimals()))); //mint new tokens in Wei
//     // }
// }


// pragma solidity ^0.6.0;

// import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
// import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

// contract MyContract is Initializable {
//     IERC20Upgradeable public token;

//     function initialize(IERC20Upgradeable _token) public initializer {
//         token = _token;
//     }
// }


//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

