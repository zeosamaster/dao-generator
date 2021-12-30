# DAO Generator

Create your own DAO with a few steps

The generated DAO includes:

- ERC-1155
- ERC-20
- Governance & Treasury

## Steps

The scripts follows a number of steps to setup the DAO.
Each step besides the first one is skippable (see [Params](#params)).

1. Initialize thirdweb's sdk
2. Setup Bundle Drop
3. Setup ERC-1155 token
4. Set claim conditions for ERC-1155 token
5. Mint ERC-1155 tokens
6. Setup ERC-20 token
7. Mint ERC-20 tokens
8. Airdrop ERC-20 tokens
9. Setup Governance & Treasury
10. Enable ERC-20 minting by Treasury
11. Fund Treasury
12. Revoke roles for creator

## Params

Each step needs some inputs to determine the outcome.
Any param can be passed as arguments to the script

Example:

```
node index.js --daoName MyAwesomeDAO
```

Step 1) Initialize thirdweb's sdk

| Param              | Description                                                           | Skips Step | Default |
| ------------------ | --------------------------------------------------------------------- | ---------- | ------- |
| ownerPublicKey     | The public key of the owner wallet                                    |            |         |
| ownerPrivateKey    | The private key of the owner wallet                                   |            |         |
| alchemyApiUrl      | Alchemy API URL                                                       |            |         |
| thirdWebAppAddress | Address to an existing ThirdWeb app (leave empty to create a new one) | TRUE       |         |
| daoName            | Name for the DAO                                                      |            |         |
| daoDescription     | Description for the DAO                                               |            |         |

Step 2) Setup Bundle Drop

| Param                   | Description                                                                                                        | Skips Step | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------- | ------- |
| bundleDropAddress       | Address to an existing Bundle Drop module (leave empty to create a new one)                                        | TRUE       |         |
| bundleDropName          | Name for the Bundle Drop                                                                                           |            |         |
| bundleDropDescription   | Description for the Bundle Drop                                                                                    |            |         |
| bundleDropImageLocation | You're gonna need an image for the Bundle Drop. Do you want to use a local path or a url? (choose `url` or `path`) |            |         |
| bundleDropImageURL      | URL for the Bundle Drop image                                                                                      |            |         |
| bundleDropImagePath     | Local path for the Bundle Drop image                                                                               |            |         |

Step 3) Setup ERC-1155 token

| Param            | Description                                                                                                | Skips Step | Default |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| shouldCreateNFT  | Do you want to create a new NFT on the bundle drop? [y/N]                                                  | TRUE       | N       |
| nftName          | Name for the NFT                                                                                           |            |         |
| nftDescription   | Description for the NFT                                                                                    |            |         |
| nftImageLocation | You're gonna need an image for the NFT. Do you want to use a local path or a url? (choose `url` or `path`) |            |         |
| nftImageURL      | URL for the NFT image                                                                                      |            |         |
| nftImagePath     | Local path for the NFT image                                                                               |            |         |

Step 4) Set claim conditions for ERC-1155 token

| Param                    | Description                                                     | Skips Step | Default                     |
| ------------------------ | --------------------------------------------------------------- | ---------- | --------------------------- |
| shouldSetClaim           | Do you want to set claim conditions for your NFT? [y/N]         | TRUE       | N                           |
| claimNFTIndex            | Index of the NFT to set the claim conditions for                |            | Latest ERC-1155 token index |
| claimStart               | When do you want the claim period to start? (format YYYY/MM/DD) |            | Current Date                |
| claimTotalQuantity       | Total amount of mintable NFTs                                   |            |                             |
| claimTransactionQuantity | # of NFTs minted per transaction                                |            |                             |

Step 5) Mint ERC-1155 tokens

| Param                 | Description                                                     | Skips Step | Default                     |
| --------------------- | --------------------------------------------------------------- | ---------- | --------------------------- |
| shouldMintNFTs        | Do you want to mint and send NFTs to other wallets? [y/N]       | TRUE       | N                           |
| mintNFTIndex          | Index of the NFT to mint and send                               |            | Latest ERC-1155 token index |
| memberWalletAddresses | Wallet addresses of the DAO members (comma separated addresses) |            |                             |
| mintNFTsQuantity      | # of NFTs to send to each wallet                                |            |                             |

Step 6) Setup ERC-20 token

| Param        | Description                                                           | Skips Step | Default |
| ------------ | --------------------------------------------------------------------- | ---------- | ------- |
| tokenAddress | Address to an existing Token module (leave empty to create a new one) | TRUE       |         |
| tokenName    | Name for the token                                                    |            |         |
| tokenSymbol  | Symbol for the token                                                  |            |         |

Step 7) Mint ERC-20 tokens

| Param            | Description                       | Skips Step | Default |
| ---------------- | --------------------------------- | ---------- | ------- |
| shouldMintTokens | Do you want to mint tokens? [y/N] | TRUE       | N       |
| tokenMintAmount  | Amount of tokens to mint          |            |         |

Step 8) Airdrop ERC-20 tokens

| Param               | Description                              | Skips Step | Default |
| ------------------- | ---------------------------------------- | ---------- | ------- |
| shouldAirdropTokens | Do you want to airdrop tokens? [y/N]     | TRUE       | N       |
| tokenAirdropAmount  | # of tokens each NFT holder will receive |            |         |

Step 9) Setup Governance & Treasury

| Param                       | Description                                                          | Skips Step | Default       |
| --------------------------- | -------------------------------------------------------------------- | ---------- | ------------- |
| voteAddress                 | Address to an existing Vote module (leave empty to create a new one) | TRUE       |               |
| voteModuleProposalDelay     | Delay until proposals opens for voting (in seconds)                  |            | 0             |
| voteModuleProposalDuration  | Duration of a proposal vote (in seconds)                             |            | 86400 = 1 day |
| voteModuleProposalMinTokens | Minimum tokens held to be able to create proposals                   |            | 0             |
| voteModuleProposalQuorum    | Minimum quorum fraction to pass the proposal                         |            | 0             |

Step 10) Enable ERC-20 minting by Treasury

| Param                 | Description                                                | Skips Step | Default |
| --------------------- | ---------------------------------------------------------- | ---------- | ------- |
| shouldSetTreasuryRole | Do you want to give the minter role to the treasury? [y/N] | TRUE       | N       |

Step 11) Fund Treasury

| Param                    | Description                                               | Skips Step | Default |
| ------------------------ | --------------------------------------------------------- | ---------- | ------- |
| shouldSetTreasuryBalance | Do you want to transfer tokens to the treasury? [y/N]     | TRUE       | N       |
| treasuryPercentage       | Percentage of total supply to transfer (min: 0, max: 100) |            | 0       |

Step 12) Revoke roles for creator

| Param                   | Description                                        | Skips Step | Default |
| ----------------------- | -------------------------------------------------- | ---------- | ------- |
| shouldRevokeCreatorRole | Do you want to revoke roles for the creator? [y/N] | TRUE       | N       |
