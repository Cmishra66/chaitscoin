// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Chaitscoin is ERC20, ERC20Permit {
    constructor() ERC20("chaitscoin", "CCO") ERC20Permit("chaitscoin") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }
}
