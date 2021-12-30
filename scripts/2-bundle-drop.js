const { ethers } = require("ethers");
const prompt = require("../utils/prompt");
const getImage = require("../utils/image");

module.exports = async function getBundleDropModule({ sdk, app }) {
  console.log("");
  console.log("-------");
  console.log("Step 2 - Setup Bundle Drop");

  try {
    const bundleDropAddress = await prompt.get("bundleDropAddress");

    if (bundleDropAddress) {
      const bundleDropModule = sdk.getBundleDropModule(bundleDropAddress);
      console.log("Loaded existing Bundle Drop module:", bundleDropAddress);
      return bundleDropModule;
    }

    const moduleConfigs = {
      name: await prompt.get("bundleDropName"),
      description: await prompt.get("bundleDropDescription"),
      image: await getImage("bundleDrop"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    };

    console.log("Deploying Bundle Drop module");
    const bundleDropModule = await app.deployBundleDropModule(moduleConfigs);
    console.log(
      "Successfully deployed Bundle Drop module address:",
      bundleDropModule.address
    );

    return bundleDropModule;
  } catch (error) {
    console.error("Failed to get Bundle Drop module", error);
    process.exit(1);
  }
};
