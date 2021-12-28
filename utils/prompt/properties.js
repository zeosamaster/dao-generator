const sdkPrompts = require("./1-sdk");
const dropPrompts = require("./2-bundle-drop");

const properties = {
  ...sdkPrompts,
  ...dropPrompts,
};

const stringProperties = Object.entries(properties)
  .filter(([name, property]) => property.type == "string")
  .map(([name, property]) => name);

module.exports = {
  properties,
  stringProperties,
};
