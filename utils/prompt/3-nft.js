module.exports = {
  shouldCreateNFT: {
    description: "Do you want to create a new NFT on the bundle drop? [y/N]",
    type: "string",
  },
  nftName: {
    description: "Name for the NFT",
    type: "string",
    required: true,
  },
  nftDescription: {
    description: "Description for the NFT",
    type: "string",
  },
  nftImageLocation: {
    description:
      "You're gonna need an image for the NFT. Do you want to use a local path or a url? (choose `url` or `path`)",
    type: "string",
    required: true,
    pattern: /^(url)|(path)$/i,
  },
  nftImageURL: {
    description: "URL for the NFT image",
    type: "string",
  },
  nftImagePath: {
    description: "Local path for the NFT image",
    type: "string",
  },
};
