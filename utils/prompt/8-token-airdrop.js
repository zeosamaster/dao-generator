module.exports = {
  shouldAirdropTokens: {
    description: "Do you want to airdrop tokens? [y/N]",
    type: "string",
  },
  tokenAirdropAmount: {
    description: "# of tokens each NFT holder will receive",
    type: "number",
    required: true,
  },
};
