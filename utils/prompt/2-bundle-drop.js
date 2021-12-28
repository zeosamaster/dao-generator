module.exports = {
  bundleDropAddress: {
    description:
      "Address to an existing Bundle Drop module (leave empty to create a new one)",
    type: "string",
  },
  bundleDropName: {
    description: "Name for the Bundle Drop",
    type: "string",
    required: true,
  },
  bundleDropDescription: {
    description: "Description for the Bundle Drop",
    type: "string",
  },
  bundleDropImageLocation: {
    description:
      "You're gonna need an image for the Bundle Drop. Do you want to use a local path or a url? (choose `url` or `path`)",
    type: "string",
    required: true,
    pattern: /^(url)|(path)$/i,
  },
  bundleDropImageURL: {
    description: "URL for the Bundle Drop image",
    type: "string",
  },
  bundleDropImagePath: {
    description: "Local path for the Bundle Drop image",
    type: "string",
  },
};
