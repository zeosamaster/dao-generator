const initializeSdk = require("./scripts/1-initialize-sdk");
const getBundleDropModule = require("./scripts/2-bundle-drop");
const setupNFT = require("./scripts/3-setup-nft");
const setClaimConditions = require("./scripts/4-set-claim-conditions");
const mintNFTs = require("./scripts/5-mint-nfts");

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
}

main();
