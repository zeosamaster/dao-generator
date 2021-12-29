const prompt = require("../utils/prompt");

module.exports = async function setClaimConditions({ bundleDropModule }) {
  try {
    const shouldSetClaim = await prompt.get("shouldSetClaim");
    if (shouldSetClaim.toLowerCase() !== "y") {
      console.log("Not setting claim conditions for NFT");
      return;
    }

    const nftIndex =
      (await prompt.get("claimNFTIndex")) ||
      (await bundleDropModule.getAll()).length - 1;

    const conditions = {
      startTime: await prompt.getDate("claimStart"),
      maxQuantity: await prompt.get("claimTotalQuantity"),
      maxQuantityPerTransaction: await prompt.get("claimTransactionQuantity"),
    };

    const claimConditionFactory = bundleDropModule.getClaimConditionFactory();
    claimConditionFactory.newClaimPhase(conditions);

    console.log(`Setting claim conditions for NFT ${nftIndex}`);
    await bundleDropModule.setClaimCondition(nftIndex, claimConditionFactory);
    console.log("Sucessfully set claim conditions for NFT");
  } catch (error) {
    console.error("Failed to set claim conditions", error);
  }
};
