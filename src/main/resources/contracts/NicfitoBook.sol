pragma solidity ^0.8.10;

import "./CoolNFT.sol"; 

contract NicfitoBook is CoolNFT {
    constructor() CoolNFT("Book", "BOOK") public {
        
    }
}