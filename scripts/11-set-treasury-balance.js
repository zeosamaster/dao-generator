const { ethers } = require("ethers");
const prompt = require("../utils/prompt");

module.exports = async function setupTreasury({ tokenModule, voteModule }) {
  try {
    const shouldSetTreasuryBalance = await prompt.get(
      "shouldSetTreasuryBalance"
    );
    if (shouldSetTreasuryBalance.toLowerCase() !== "y") {
      console.log("Not setting treasury balance");
      return;
    }

    const treasuryPercentage = await prompt.get("treasuryPercentage");
    const totalSupply = await tokenModule.totalSupply();
    const treasuryAmount = totalSupply.div(100).mul(treasuryPercentage);

    const decimals = ethers.BigNumber.from(10).pow(18);
    const readableAmount = treasuryAmount.div(decimals);

    console.log(`Transfering ${readableAmount} tokens to treasury`);

    await tokenModule.transfer(
      voteModule.address,
      ethers.BigNumber.from(treasuryAmount)
    );
    console.log(
      `Successfully transferred ${readableAmount} tokens to the treasury`
    );
  } catch (error) {
    console.error("Failed to transfer tokens to the treasury", error);
  }
};
