import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

    _window: any;
    _web3: any;
    _contractAddress = '0x069a9630f72E6963E98B95C0E3227CD090074C98';
    _abi = [
        {
            "constant": true,
            "inputs": [],
            "name": "totalPayments",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_interfaceID",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "deed",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "bytes"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "beneficiaryOf",
            "outputs": [
                {
                    "name": "_beneficiary",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "deedName",
            "outputs": [
                {
                    "name": "_name",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_url",
                    "type": "string"
                }
            ],
            "name": "setUrl",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "deedsOf",
            "outputs": [
                {
                    "name": "_ownedDeedIds",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "approvedFor",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "deedOfOwnerByIndex",
            "outputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "url",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdrawPayments",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_name",
                    "type": "bytes32"
                },
                {
                    "name": "_ipfs",
                    "type": "bytes"
                },
                {
                    "name": "_beneficiary",
                    "type": "address"
                }
            ],
            "name": "create",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "countOfDeedsByOwner",
            "outputs": [
                {
                    "name": "_count",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "destroy",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
                    "type": "address"
                },
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "name": "setCreationPrice",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "takeOwnership",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "approvedOf",
            "outputs": [
                {
                    "name": "_ownedDeedIds",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "priceOf",
            "outputs": [
                {
                    "name": "_price",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "ExampleDeed",
            "outputs": [],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "deedUri",
            "outputs": [
                {
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "pay",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "countOfDeeds",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "payments",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "ids",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "appropriate",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "beneficiary",
                    "type": "address"
                }
            ],
            "name": "Creation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "oldOwner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "oldPrice",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "newPrice",
                    "type": "uint256"
                }
            ],
            "name": "Appropriation",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "name": "sender",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Payment",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "Destruction",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Pause",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Unpause",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipRenounced",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_deedId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        }
    ];

    _contract = new ReplaySubject<any>();
    _account = new ReplaySubject<any>();

    constructor() {
    }

    init() {
        this._window = window as any;
        this._web3 = this._window.web3;
        if (typeof this._window.web3 !== 'undefined') {
            this._web3.version.getNetwork((_err, res) => {
                if (_err) {
                    console.error(_err);
                    return;
                }

                if (res !== '3') {
                    console.error('Please connect to the Ropsten network');
                    return;
                }

                this._contract.next(this._web3.eth.contract(this._abi).at(this._contractAddress));
                console.log('contract successfully initialized', this._contract);
            });
        } else {
            console.error('no web3 on window');
        }

        if (typeof this._window.web3 !== 'undefined') {
            this._web3.eth.getAccounts((_err, res) => {
                if (_err) {
                    console.error(_err);
                    return;
                }

                if (!res.length) {
                    console.error('no account!');
                    return;
                }

                this._account.next(res[0]);
                console.log('current account', this._account);
            });
        } else {
            console.error('no web3 on window');
        }
    }

    get contract() {
        return this._contract;
    }

    get account() {
        return this._account;
    }

}
