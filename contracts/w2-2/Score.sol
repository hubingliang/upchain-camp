// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "./IScroe.sol";

contract Score is IScore {
    address public teacher;
    mapping(address => uint) scoreMap;

    constructor() payable {
        teacher = payable(msg.sender);
    }

    modifier onlyTeacher() {
        require(msg.sender == teacher);
        _;
    }

    function changeScore(address _student, uint _score) external onlyTeacher {
        if (_score > 100) {
            revert scoreOverLimit();
        }
        scoreMap[_student] = _score;
        emit ScoreUpdate(_student, _score);
    }
}
