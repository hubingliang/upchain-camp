// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract BHToken is ERC777 {
    constructor() ERC777("Brian Hu Token", "BHT", new address[](0)) {
        _mint(msg.sender, 1000 * 10 ** 18, "", "");
    }
}
