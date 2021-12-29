const prompt = require("../utils/prompt");

module.exports = async function setupToken({ sdk, app }) {
  try {
    const tokenAddress = await prompt.get("tokenAddress");

    if (tokenAddress) {
      const tokenModule = sdk.getTokenModule(tokenAddress);
      console.log("Loaded existing Token module:", tokenAddress);
      return tokenModule;
    }

    const moduleConfigs = {
      name: await prompt.get("tokenName"),
      symbol: await prompt.get("tokenSymbol"),
    };

    console.log("Deploying Token module");
    const tokenModule = await app.deployTokenModule(moduleConfigs);
    console.log("Successfully deployed token module:", tokenModule.address);

    return tokenModule;
  } catch (error) {
    console.error("Failed to get the token module", error);
  }
};
