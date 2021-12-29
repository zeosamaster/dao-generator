const initializeSdk = require("./scripts/1-initialize-sdk");
const getBundleDropModule = require("./scripts/2-bundle-drop");
const setupNFT = require("./scripts/3-setup-nft");
const setClaimConditions = require("./scripts/4-set-claim-conditions");
const mintNFTs = require("./scripts/5-mint-nfts");
const setupToken = require("./scripts/6-setup-token");
const mintTokens = require("./scripts/7-mint-tokens");
const airdropTokensToNFTHolders = require("./scripts/8-airdrop-tokens");
const setupVoteModule = require("./scripts/9-setup-vote");
const setTreasuryRole = require("./scripts/10-set-treasury-role");
const setTreasuryBalance = require("./scripts/11-set-treasury-balance");

async function main() {
  // 1. ThirdWeb SDK
  const { sdk, app } = await initializeSdk();

  // 2. NFT Drop Bundle
  const bundleDropModule = await getBundleDropModule({ sdk, app });

  // 3. NFT
  await setupNFT({ bundleDropModule });

  // 4. Set claim conditions
  await setClaimConditions({ bundleDropModule });

  // 5. Mint NFTs
  await mintNFTs({ bundleDropModule });

  // 6. Token
  const tokenModule = await setupToken({ sdk, app });

  // 7. Mint tokens
  await mintTokens({ tokenModule });

  // 8. Airdrop tokens for NFT Holders
  await airdropTokensToNFTHolders({ tokenModule });

  // 9. Vote
  const voteModule = await setupVoteModule({ sdk, app, tokenModule });

  // 10. Set treasury role
  await setTreasuryRole({ tokenModule, voteModule });

  // 11. Set treasury balance
  await setTreasuryBalance({ tokenModule, voteModule });
}

main();
