const { ethers } = require("ethers");
const prompt = require("../utils/prompt");

module.exports = async function mintTokens({ tokenModule }) {
  console.log("");
  console.log("-------");
  console.log("Step 7 - Mint ERC-20 tokens");

  try {
    const shouldMintTokens = await prompt.get("shouldMintTokens");
    if (shouldMintTokens.toLowerCase() !== "y") {
      console.log("No tokens will be minted");
      return;
    }

    const amount = Number((await prompt.get("tokenMintAmount")) || 0);
    const amountWithDecimals = ethers.utils.parseUnits(amount.toString(), 18);

    console.log("Minting tokens");
    await tokenModule.mint(amountWithDecimals);
    console.log("Succcessully minted tokens");
  } catch (error) {
    console.error("Failed to mint tokens", error);
  }
};
