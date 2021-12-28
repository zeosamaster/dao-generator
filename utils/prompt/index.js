const prompt = require("./prompt");
const { properties, stringProperties } = require("./properties");

prompt.start(properties, stringProperties);

module.exports = prompt;
