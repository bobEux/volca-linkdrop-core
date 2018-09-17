export const ABI = [
    {
	"constant": false,
	"inputs": [],
	"name": "stop",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_referralAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifyReceiverAddress",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "pure",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "TOKEN_ADDRESS",
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
	"inputs": [],
	"name": "CLAIM_AMOUNT",
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
	"name": "AIRDROPPER",
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
	"inputs": [
	    {
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_referralAddress",
		"type": "address"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "withdraw",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
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
	"constant": true,
	"inputs": [],
	"name": "REFERRAL_AMOUNT",
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
	"name": "stopped",
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
	"inputs": [],
	"name": "AIRDROP_TRANSIT_ADDRESS",
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
		"name": "_transitAddress",
		"type": "address"
	    }
	],
	"name": "isLinkClaimed",
	"outputs": [
	    {
		"name": "claimed",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
    },
    {
	"constant": true,
	"inputs": [],
	"name": "CLAIM_AMOUNT_ETH",
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
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_addressSigned",
		"type": "address"
	    },
	    {
		"name": "_v",
		"type": "uint8"
	    },
	    {
		"name": "_r",
		"type": "bytes32"
	    },
	    {
		"name": "_s",
		"type": "bytes32"
	    }
	],
	"name": "verifyLinkPrivateKey",
	"outputs": [
	    {
		"name": "success",
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
		"name": "_recipient",
		"type": "address"
	    },
	    {
		"name": "_referralAddress",
		"type": "address"
	    },
	    {
		"name": "_transitAddress",
		"type": "address"
	    },
	    {
		"name": "_keyV",
		"type": "uint8"
	    },
	    {
		"name": "_keyR",
		"type": "bytes32"
	    },
	    {
		"name": "_keyS",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientV",
		"type": "uint8"
	    },
	    {
		"name": "_recipientR",
		"type": "bytes32"
	    },
	    {
		"name": "_recipientS",
		"type": "bytes32"
	    }
	],
	"name": "checkWithdrawal",
	"outputs": [
	    {
		"name": "success",
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
	"name": "getEtherBack",
	"outputs": [
	    {
		"name": "success",
		"type": "bool"
	    }
	],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
    },
    {
	"inputs": [
	    {
		"name": "_tokenAddress",
		"type": "address"
	    },
	    {
		"name": "_claimAmount",
		"type": "uint256"
	    },
	    {
		"name": "_referralAmount",
		"type": "uint256"
	    },
	    {
		"name": "_claimAmountEth",
		"type": "uint256"
	    },
	    {
		"name": "_airdropTransitAddress",
		"type": "address"
	    }
	],
	"payable": true,
	"stateMutability": "payable",
	"type": "constructor"
    },
    {
	"anonymous": false,
	"inputs": [],
	"name": "Stop",
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
    }
];

    
export const BYTECODE =  "608060408190526000805460a060020a61ffff021916905560a080610ba2833981016040908152815160208301519183015160608401516080909401516000805433600160a060020a0319918216811783556005805483169091179055600180548216600160a060020a039687161790556002959095556003929092556004949094556006805490931691909316179055610b029081906100a090396000f3006080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166307da68f581146101005780630bdf5300146101175780630c82ed8414610148578063270ef38514610195578063368a5e34146101bc5780633d8d020a146101d15780633f4ba83a146102195780635c975abb1461022e578063611f19311461024357806375f12b21146102585780638456cb591461026d5780638da5cb5b14610282578063998ac10414610297578063b2e357b4146102ac578063c90c205b146102cd578063cd26ac83146102e2578063df5f53f114610315578063fd68610f1461035d575b600080fd5b34801561010c57600080fd5b50610115610372565b005b34801561012357600080fd5b5061012c610412565b60408051600160a060020a039092168252519081900360200190f35b34801561015457600080fd5b50610181600160a060020a036004358116906024358116906044351660ff6064351660843560a435610421565b604080519115158252519081900360200190f35b3480156101a157600080fd5b506101aa6104fd565b60408051918252519081900360200190f35b3480156101c857600080fd5b5061012c610503565b3480156101dd57600080fd5b50610181600160a060020a036004358116906024358116906044351660ff6064358116906084359060a4359060c4351660e43561010435610512565b34801561022557600080fd5b506101156107bb565b34801561023a57600080fd5b50610181610831565b34801561024f57600080fd5b506101aa610841565b34801561026457600080fd5b50610181610847565b34801561027957600080fd5b50610115610869565b34801561028e57600080fd5b5061012c6108e4565b3480156102a357600080fd5b5061012c6108f3565b3480156102b857600080fd5b50610181600160a060020a0360043516610902565b3480156102d957600080fd5b506101aa610920565b3480156102ee57600080fd5b50610181600160a060020a036004358116906024351660ff60443516606435608435610926565b34801561032157600080fd5b50610181600160a060020a036004358116906024358116906044351660ff6064358116906084359060a4359060c4351660e435610104356109f7565b34801561036957600080fd5b50610181610a7a565b600054600160a060020a0316331461038957600080fd5b6000547501000000000000000000000000000000000000000000900460ff16156103b257600080fd5b6000805475ff000000000000000000000000000000000000000000191675010000000000000000000000000000000000000000001781556040517fbedf0f4abfe86d4ffad593d9607fe70e83ea706033d44d24b3b6283cf3fc4f6b9190a1565b600154600160a060020a031681565b604080517f19457468657265756d205369676e6564204d6573736167653a0a33320000000081526c01000000000000000000000000600160a060020a038089168202601c840152871602603082015281519081900360440181206000808352602080840180865283905260ff8816848601526060840187905260808401869052935190939192849260019260a080840193601f19830192908190039091019086865af11580156104d5573d6000803e3d6000fd5b5050604051601f190151600160a060020a039081169a16999099149998505050505050505050565b60025481565b600554600160a060020a031681565b60008054819060a060020a900460ff161561052c57600080fd5b6000547501000000000000000000000000000000000000000000900460ff161561055557600080fd5b6105668b8b8b8b8b8b8b8b8b6109f7565b151561057157600080fd5b6001600760008b600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908315150217905550600160009054906101000a9004600160a060020a0316905080600160a060020a03166323b872dd600560009054906101000a9004600160a060020a03168d6002546040518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600160a060020a0316600160a060020a0316815260200183600160a060020a0316600160a060020a031681526020018281526020019350505050602060405180830381600087803b15801561067457600080fd5b505af1158015610688573d6000803e3d6000fd5b505050506040513d602081101561069e57600080fd5b505060035460001080156106ba5750600160a060020a038a1615155b1561076657600554600354604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0393841660048201528d84166024820152604481019290925251918316916323b872dd916064808201926020929091908290030181600087803b15801561073957600080fd5b505af115801561074d573d6000803e3d6000fd5b505050506040513d602081101561076357600080fd5b50505b600060045411156107aa57600454604051600160a060020a038d169180156108fc02916000818181858888f193505050501580156107a8573d6000803e3d6000fd5b505b5060019a9950505050505050505050565b600054600160a060020a031633146107d257600080fd5b60005460a060020a900460ff1615156107ea57600080fd5b6000805474ff0000000000000000000000000000000000000000191681556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b339190a1565b60005460a060020a900460ff1681565b60035481565b6000547501000000000000000000000000000000000000000000900460ff1681565b600054600160a060020a0316331461088057600080fd5b60005460a060020a900460ff161561089757600080fd5b6000805474ff0000000000000000000000000000000000000000191660a060020a1781556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff6259190a1565b600054600160a060020a031681565b600654600160a060020a031681565b600160a060020a031660009081526007602052604090205460ff1690565b60045481565b604080517f19457468657265756d205369676e6564204d6573736167653a0a33320000000081526c01000000000000000000000000600160a060020a03871602601c82015281519081900360300181206000808352602080840180865283905260ff8816848601526060840187905260808401869052935190939192849260019260a080840193601f19830192908190039091019086865af11580156109d0573d6000803e3d6000fd5b5050604051601f190151600160a060020a0390811699169890981498975050505050505050565b600160a060020a03871660009081526007602052604081205460ff1615610a1d57600080fd5b600654610a3790600160a060020a0316898b8a8a8a610421565b1515610a4257600080fd5b610a4f888b868686610926565b1515610a5a57600080fd5b60045430311015610a6a57600080fd5b5060019998505050505050505050565b600554600090600160a060020a03163314610a9457600080fd5b600554604051600160a060020a0390911690303180156108fc02916000818181858888f19350505050158015610ace573d6000803e3d6000fd5b5060019050905600a165627a7a7230582025e95c73a7ec21c99fde265c6a80758efcfc55d6b2c6ad51a78e97954a2a284c0029";
