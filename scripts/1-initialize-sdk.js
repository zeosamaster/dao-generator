const { ThirdwebSDK } = require("@3rdweb/sdk");
const ethers = require("ethers");
const prompt = require("../utils/prompt");

module.exports = async function () {
  try {
    const ownerPublicKey = await prompt.get("ownerPublicKey");
    if (!ownerPublicKey) {
      console.error("Wallet Address not found.");
      process.exit(1);
    }

    const ownerPrivateKey = await prompt.get("ownerPrivateKey");
    if (!ownerPrivateKey) {
      console.error("Private key not found.");
      process.exit(1);
    }

    const alchemyApiUrl = await prompt.get("alchemyApiUrl");
    if (!alchemyApiUrl) {
      console.error("Alchemy API URL not found.");
      process.exit(1);
    }

    const provider = ethers.getDefaultProvider(alchemyApiUrl);
    const wallet = new ethers.Wallet(ownerPrivateKey, provider);
    const sdk = new ThirdwebSDK(wallet);

    const thirdWebAppAddress = await prompt.get("thirdWebAppAddress");
    if (thirdWebAppAddress) {
      const app = sdk.getAppModule(thirdWebAppAddress);
      console.log("Loaded existing ThirdWeb app:", thirdWebAppAddress);
      return { sdk, app, appAddress: thirdWebAppAddress };
    }

    console.log("Creating ThirdWeb app");
    await sdk.createApp({
      name: await prompt.get("daoName"),
      description: await prompt.get("daoDescription"),
    });

    const apps = await sdk.getApps();
    const appAddress = apps[0].address;
    const app = sdk.getAppModule(appAddress);

    console.log("Successfully created ThirdWeb app:", appAddress);

    return { sdk, app };
  } catch (error) {
    console.error("Failed to initialize SDK", error);
    process.exit(1);
  }
};
