pragma solidity ^0.6.2

abstract contract Context {
    function _msgSender() internal view virtual return (address payable) {
        return msg.sender;
    }
}