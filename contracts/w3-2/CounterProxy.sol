//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CounterProxy {
    address public impl;
    uint public counter;

    function upgradeTo(address _impl) public {
        impl = _impl;
    }

    function delegateAdd(uint256 n) external {
        bytes memory callData = abi.encodeWithSignature("add(uint256)", n);
        (bool ok, ) = address(impl).delegatecall(callData);
        if (!ok) revert("Delegate call failed");
    }
}
