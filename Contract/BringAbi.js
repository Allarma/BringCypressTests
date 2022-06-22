export const V3 = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_referralPercents",
				"type": "uint256[]"
			}
		],
		"name": "changeReferralPercents",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_days",
				"type": "uint256"
			}
		],
		"name": "changeStakingDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "Claim",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			}
		],
		"name": "claimReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "minStakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxStakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalStakeLimit",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "farmingSequence",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "rewardRates",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "maxPenalty",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "penaltyDuration",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "penaltyReceiver",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referralRewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "referralMultiplier",
				"type": "uint256"
			}
		],
		"name": "configPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "rewards",
				"type": "uint256[]"
			},
			{
				"internalType": "bool",
				"name": "payReferralRewards",
				"type": "bool"
			}
		],
		"name": "emergencyUnstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "referrerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "NewReferralConnection",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiverAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "callerAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "refererr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "rewardTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "percent",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "ReferralPayout",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "retrieveTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reward",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "RewardPayout",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "Stake",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			}
		],
		"name": "unstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "Unstake",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			}
		],
		"name": "unstakeForAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractDeploymentTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "minStakeAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxStakeAmount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalStakeLimit",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "farmingSequence",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "rewardRates",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "rewardAccPerShare",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastOperationTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "totalStaked",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "maxPenalty",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "penaltyDuration",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "penaltyReceiver",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "referralRewardTokenAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "referralMultiplier",
						"type": "uint256"
					}
				],
				"internalType": "struct Pool",
				"name": "pool",
				"type": "tuple"
			}
		],
		"name": "getPenaltyPercent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			}
		],
		"name": "getPoolPenaltyInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "penaltyPercent",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timeLeft",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getReferrals",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getReferralsNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "stakeIdx",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "afterPenalty",
				"type": "bool"
			}
		],
		"name": "getStakeRewards",
		"outputs": [
			{
				"internalType": "uint256[10]",
				"name": "rewards",
				"type": "uint256[10]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "isActiveUser",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "poolAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "minStakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxStakeAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalStakeLimit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardAccPerShare",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastOperationTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxPenalty",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "penaltyDuration",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "penaltyReceiver",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referralRewardTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "referralMultiplier",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REFERRAL_MULTIPLIER_DECIMALS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "referralPercents",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "idx",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "stakedTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakeAcc",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "stakeTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unstakeTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalReferralPercent",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "registrationTime",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "offset",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "limit",
				"type": "uint8"
			}
		],
		"name": "viewStakingDetails",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]