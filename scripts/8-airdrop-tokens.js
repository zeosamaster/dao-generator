const { ethers } = require("ethers");
const prompt = require("../utils/prompt");

module.exports = async function airdropTokensToNFTHolders({ tokenModule }) {
  console.log("");
  console.log("-------");
  console.log("Step 8 - Airdrop ERC-20 tokens");

  try {
    const shouldAirdropTokens = await prompt.get("shouldAirdropTokens");
    if (shouldAirdropTokens.toLowerCase() !== "y") {
      console.log("No tokens will be airdropped");
      return;
    }

    const walletAddresses = await prompt.get("memberWalletAddresses");
    if (walletAddresses.length === 0) {
      console.log("No tokens will be airdropped");
      return;
    }

    const amountToAirdrop = await prompt.get("tokenAirdropAmount");

    const airdropTargets = walletAddresses.map((address) => {
      return {
        address,
        amount: ethers.utils.parseUnits(`${amountToAirdrop}`, 18),
      };
    });

    console.log(`Airdropping tokens to ${airdropTargets.length} wallet(s)`);
    await tokenModule.transferBatch(airdropTargets);
    console.log("Successfully airdropped tokens to NFT holders");
  } catch (error) {
    console.error("Failed to airdrop tokens", error);
  }
};
