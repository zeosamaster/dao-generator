const prompt = require("prompt");
const minimist = require("minimist");

module.exports = {
  properties: {},

  start: function (promptProperties, stringKeys) {
    this.properties = promptProperties;

    const options = { string: stringKeys };
    prompt.override = minimist(process.argv, options);
    prompt.start();
  },

  get: async function (property) {
    if (!this.properties[property]) {
      throw Error(`Property ${property} isn't configured for prompt`);
    }

    const { [property]: value } = await prompt.get({
      ...this.properties[property],
      name: property,
    });

    console.debug(
      property,
      !this.properties[property].hidden ? value : "******"
    );

    return value;
  },

  pressAnyKey: async function () {
    await prompt.get({ description: "Press any key to continue..." });
  },
};
