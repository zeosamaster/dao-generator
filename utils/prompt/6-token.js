module.exports = {
  tokenAddress: {
    description:
      "Address to an existing Token module (leave empty to create a new one)",
    type: "string",
  },
  tokenName: {
    description: "Name for the token",
    type: "string",
    required: true,
  },
  tokenSymbol: {
    description: "Symbol for the token",
    type: "string",
  },
};
