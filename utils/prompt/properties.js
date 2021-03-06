const sdkPrompts = require("./1-sdk");
const dropPrompts = require("./2-bundle-drop");
const nftPrompts = require("./3-nft");
const claimPrompts = require("./4-claim");
const nftMintingPrompts = require("./5-nft-minting");
const tokenPrompts = require("./6-token");
const tokenMintingPrompts = require("./7-token-minting");
const tokenAirdropPrompts = require("./8-token-airdrop");
const votePrompts = require("./9-vote");
const treasuryRolePrompts = require("./10-treasury-role");
const treasuryBalancePrompts = require("./11-treasury-balance");
const revokeRolePrompts = require("./12-revoke-role");

const properties = {
  ...sdkPrompts,
  ...dropPrompts,
  ...nftPrompts,
  ...claimPrompts,
  ...nftMintingPrompts,
  ...tokenPrompts,
  ...tokenMintingPrompts,
  ...tokenAirdropPrompts,
  ...votePrompts,
  ...treasuryRolePrompts,
  ...treasuryBalancePrompts,
  ...revokeRolePrompts,
};

const stringProperties = Object.entries(properties)
  .filter(([name, property]) => property.type == "string")
  .map(([name, property]) => name);

module.exports = {
  properties,
  stringProperties,
};
