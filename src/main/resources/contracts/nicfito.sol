pragma solidity ^0.8.9; 

abstract contract Context {
    function _msgSender() internal view virtual returns (address payable) {
        return msg.sender;
    }
}

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NicfitoContract is ERC721 {

    uint256 public tokenCounter; 

    constructor () public ERC721 ("Dogie", "DOG"){
        tokenCounter = 0; 
    }

    function createCollectible(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = tokenCounter; 
        _safeMint(msg.sender, newItemId); 
        _setTokenURI(newItemId, tokenURI);
        tokenCounter = tokenCounter + 1; 
        return newItemId; 
    }
}