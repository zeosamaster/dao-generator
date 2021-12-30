const prompt = require("../utils/prompt");

module.exports = async function mintNFTs({ bundleDropModule }) {
  console.log("");
  console.log("-------");
  console.log("Step 5 - Mint ERC-1155 tokens");

  try {
    const shouldMintNFTs = await prompt.get("shouldMintNFTs");
    if (shouldMintNFTs.toLowerCase() !== "y") {
      console.log("Not minting NFTs");
      return;
    }

    const nftIndex =
      (await prompt.get("mintNFTIndex")) ||
      (await bundleDropModule.getAll()).length - 1;

    const walletAddresses = await prompt.get("memberWalletAddresses");
    const quantity = await prompt.get("mintNFTsQuantity");

    console.log("Minting NFTs");

    for (let address of walletAddresses) {
      try {
        console.log(`Minting ${quantity} NFT(s) for wallet address ${address}`);
        await bundleDropModule.claim(nftIndex, quantity);
        console.log(`Sending ${quantity} NFT(s) to wallet address ${address}`);
        await bundleDropModule.transfer(address, nftIndex, quantity);
        console.log(
          `Sucessfully minted ${quantity} NFT(s) for wallet address ${address}`
        );
      } catch (error) {
        console.error(
          `Unable to mint ${quantity} NFT(s) for wallet address ${address}`,
          error
        );
      }
    }

    console.log("Sucessfully minted NFTs");
  } catch (error) {
    console.error("Failed to mint NFTs", error);
  }
};
