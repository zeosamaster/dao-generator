const open = require("open");
const prompt = require("./prompt");

module.exports = {
  thirdWebAppAddress: {
    description:
      "Address to an existing ThirdWeb app (leave empty to create a new one)",
    type: "string",
  },
  daoName: {
    description: "Name for the DAO",
    type: "string",
  },
  daoDescription: {
    description: "Description for the DAO",
    type: "string",
  },
  ownerPublicKey: {
    description: "The public key of the owner wallet",
    type: "string",
    required: true,
  },
  ownerPrivateKey: {
    description: "The private key of the owner wallet",
    type: "string",
    hidden: true,
    replace: "*",
    required: true,
  },
  alchemyApiUrl: {
    description: "Alchemy API URL (check https://dashboard.alchemyapi.io/apps)",
    type: "string",
    required: true,
  },
};
