module.exports = {
  shouldMintTokens: {
    description: "Do you want to mint tokens? [y/N]",
    type: "string",
  },
  tokenMintAmount: {
    description: "Amount of tokens to mint",
    type: "string",
    required: true,
  },
};
