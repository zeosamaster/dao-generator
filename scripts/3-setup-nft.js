const getImage = require("../utils/image");
const prompt = require("../utils/prompt");

module.exports = async function setupNFT({ bundleDropModule }) {
  console.log("");
  console.log("-------");
  console.log("Step 3 - Setup ERC-1155 token");

  try {
    const shouldCreateNFT = await prompt.get("shouldCreateNFT");
    if (shouldCreateNFT.toLowerCase() !== "y") {
      console.log("No NFT will be created");
      return;
    }

    const nftBatchConfig = {
      name: await prompt.get("nftName"),
      description: await prompt.get("nftDescription"),
      image: await getImage("nft"),
      external_url: "",
      background_color: "",
      properties: {},
    };

    console.log("Creating NFT");
    await bundleDropModule.createBatch([nftBatchConfig]);
    console.log("NFT created successfully");
  } catch (error) {
    console.error("Failed to config NFT", error);
  }
};
