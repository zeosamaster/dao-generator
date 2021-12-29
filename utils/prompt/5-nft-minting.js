module.exports = {
  shouldMintNFTs: {
    description: "Do you want to mint and send NFTs to other wallets? [y/N]",
    type: "string",
  },
  mintNFTIndex: {
    description:
      "Index of the NFT to mint and send (leave empty to use the latest NFT)",
    type: "string",
  },
  memberWalletAddresses: {
    description:
      "Wallet addresses of the DAO members (comma separated addresses)",
    type: "string",
    required: true,
    isArray: true,
  },
  mintNFTsQuantity: {
    description: "# of NFTs to send to each wallet",
    type: "string",
    required: true,
  },
};
