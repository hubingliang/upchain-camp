// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "hardhat/console.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    uint256 public count = 0;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    function addCount(uint256 x) public {
        require(msg.sender == owner, "Not allow");
        count += x;
    }
}
