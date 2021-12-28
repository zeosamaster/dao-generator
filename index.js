const initializeSdk = require("./scripts/1-initialize-sdk");

async function main() {
  // 1. ThirdWeb SDK
  const { sdk, app } = await initializeSdk();
}

main();
