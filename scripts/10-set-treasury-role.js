const prompt = require("../utils/prompt");

module.exports = async function setTreasuryRole({ tokenModule, voteModule }) {
  console.log("");
  console.log("-------");
  console.log("Step 10 - Enable ERC-20 minting by Treasury");

  try {
    const shouldSetTreasuryRole = await prompt.get("shouldSetTreasuryRole");
    if (shouldSetTreasuryRole.toLowerCase() !== "y") {
      console.log("Not setting treasury role");
      return;
    }

    console.log("Giving the minter role to the treasury");
    await tokenModule.grantRole("minter", voteModule.address);
    console.log("Successfully gave the minter role to the treasury");
  } catch (error) {
    console.error("Failed to give minter role to the treasury", error);
  }
};
