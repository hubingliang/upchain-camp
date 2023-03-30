// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "./Score.sol";
import "./IScroe.sol";

// import "hardhat/console.sol";

contract Teacher {
    Score public score;

    constructor() payable {
        bytes32 salt = keccak256(abi.encodePacked(msg.sender));
        score = new Score{salt: salt}();
    }

    function updateScore(address _student, uint _score) public {
        score.changeScore(_student, _score);
    }
}
