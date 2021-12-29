module.exports = {
  shouldSetClaim: {
    description: "Do you want to set claim conditions for your NFT? [y/N]",
    type: "string",
  },
  claimNFTIndex: {
    description:
      "Index of the NFT to set the claim conditions for (leave empty to use the latest NFT)",
    type: "string",
  },
  claimStart: {
    description:
      "When do you want the claim period to start? (leave empty for current date, use YYYY/MM/DD format otherwise)",
    type: "string",
  },
  claimTotalQuantity: {
    description: "Total amount of mintable NFTs",
    type: "number",
    required: true,
  },
  claimTransactionQuantity: {
    description: "# of NFTs minted per transaction",
    default: 1,
    type: "number",
  },
};
