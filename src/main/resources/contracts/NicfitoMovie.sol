pragma solidity ^0.8.10; 

import "./CoolNFT.sol";

contract NicfitoMovie is CoolNFT {
    constructor() CoolNFT("Movie", "MOVIE") public {

    }
}