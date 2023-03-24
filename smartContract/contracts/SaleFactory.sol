// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";
import "./token/ERC721/ERC721.sol";
import "./Nfast.sol";
import "./Sale.sol";


contract SaleFactory is Ownable {
    address public admin;
    address[] public sales;

    event NewSale(address indexed _saleContract, address indexed _owner, uint256 _workId);

    constructor() {
        admin = msg.sender;
    }

    function createSale(uint256 _nftId, address _storeAddress, uint256 _price, uint256 _startTime, uint256 _endTime, address _currencyAddress, address _nftAddress)
    public
    returns (address) {
        // 사장인지 거래인지 구분
        bool isStore = false;
        if (_storeAddress == msg.sender) isStore = true;

        Sale newSale = new Sale(_nftId, _storeAddress, _price, isStore, _startTime, _endTime, _currencyAddress, _nftAddress, msg.sender);
        sales.push(address(newSale));

        emit NewSale(address(newSale), msg.sender, _nftId);
        return address(newSale);
    }

    function allSales()
    public
    view
    returns (address[] memory) {
        return sales;
    }
}