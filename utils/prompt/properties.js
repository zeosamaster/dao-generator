const sdkPrompts = require("./1-sdk");
const dropPrompts = require("./2-bundle-drop");
const nftPrompts = require("./3-nft");
const claimPrompts = require("./4-claim");

const properties = {
  ...sdkPrompts,
  ...dropPrompts,
  ...nftPrompts,
  ...claimPrompts,
};

const stringProperties = Object.entries(properties)
  .filter(([name, property]) => property.type == "string")
  .map(([name, property]) => name);

module.exports = {
  properties,
  stringProperties,
};
