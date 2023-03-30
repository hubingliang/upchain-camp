// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/interfaces/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol";

interface TokenRecipient {
    function tokensReceived(
        address sender,
        uint amount
    ) external returns (bool);
}

contract Bank is TokenRecipient {
    mapping(address => uint) public depositMapping;
    address public immutable token;

    bytes32 private constant TOKENS_RECIPIENT_INTERFACE_HASH =
        0xb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b;

    IERC1820Registry private erc1820 =
        IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);

    constructor(address _token) {
        token = _token;
        erc1820.setInterfaceImplementer(
            address(this),
            TOKENS_RECIPIENT_INTERFACE_HASH,
            address(this)
        );
    }

    function deposit(address user, uint amount) public {
        require(
            IERC20(token).transferFrom(msg.sender, address(this), amount),
            "Transfer from error"
        );
        depositMapping[user] += amount;
    }

    function permitDeposit(
        address user,
        uint amount,
        uint deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        IERC20Permit(token).permit(
            msg.sender,
            address(this),
            amount,
            deadline,
            v,
            r,
            s
        );
        deposit(user, amount);
    }

    function tokensReceived(
        address operator,
        address from,
        address to,
        uint amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external {
        require(msg.sender == token, "invalid");
        depositMapping[from] += amount;
    }

    function tokensReceived(
        address sender,
        uint amount
    ) external returns (bool) {
        require(msg.sender == token, "invalid");
        depositMapping[sender] += amount;
        return true;
    }
}
