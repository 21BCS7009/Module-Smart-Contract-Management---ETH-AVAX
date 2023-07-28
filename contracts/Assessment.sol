// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Assessment {
    string private naming;

    constructor(string memory _naming) {
        naming = _naming;
    }

    function name() public view returns (string memory) {
        return naming;
    }

    function setNaming(string memory _naming) public {
        naming = _naming;
    }
}
