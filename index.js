const initializeSdk = require("./scripts/1-initialize-sdk");
const getBundleDropModule = require("./scripts/2-bundle-drop");
const setupNFT = require("./scripts/3-setup-nft");

async function main() {
  // 1. ThirdWeb SDK
  const { sdk, app } = await initializeSdk();

  // 2. NFT Drop Bundle
  const bundleDropModule = await getBundleDropModule({ sdk, app });

  // 3. NFT
  await setupNFT({ bundleDropModule });
}

main();
