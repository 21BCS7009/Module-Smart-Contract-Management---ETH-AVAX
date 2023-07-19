// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract sample {
    address payable public Owner;

    struct privateInfo {
        address addr;
        string password;
    }
    mapping(address => privateInfo) private userPrivateInfo;

    struct publicInfo {
        address addr;
        string email;
        string fullname;
    }
    mapping(address => publicInfo) public userPublicInfo;

    constructor() {
        Owner = payable(msg.sender);
    }

    function createID(
        string memory _email,
        string memory _password,
        string memory _fullname
    ) public payable returns (bool) {
        Owner.transfer(10 wei);
        userPrivateInfo[msg.sender] = privateInfo(msg.sender, _password);
        userPublicInfo[msg.sender] = publicInfo(msg.sender, _email, _fullname);
        return true;
    }

    function updatePassword(string memory _password, address _addr)
        public
        returns (bool)
    {
        require(
            userPublicInfo[_addr].addr == msg.sender,
            "You have not created this account"
        );
        userPrivateInfo[msg.sender] = privateInfo(msg.sender, _password);
        userPublicInfo[msg.sender] = publicInfo(
            msg.sender,
            userPublicInfo[msg.sender].email,
            userPublicInfo[msg.sender].fullname
        );
        return true;
    }

    function ViewPassword(address _addr)
        public
        view
        returns (string memory _password)
    {
        require(
            userPublicInfo[_addr].addr == msg.sender,
            "You have not created this account"
        );
        return (userPrivateInfo[_addr].password);
    }
}
