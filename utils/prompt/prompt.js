const prompt = require("prompt");
const minimist = require("minimist");

module.exports = {
  properties: {},
  history: {},

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

    if (this.history[property]) {
      return this.history[property];
    }

    const { [property]: value } = await prompt.get({
      ...this.properties[property],
      name: property,
    });

    const parsedValue = this.properties[property].isArray
      ? value.split(/[\s,]+/g)
      : value;

    // console.debug(
    //   property,
    //   !this.properties[property].hidden ? parsedValue : "******"
    // );

    this.history[property] = parsedValue;

    return parsedValue;
  },

  pressAnyKey: async function () {
    await prompt.get({ description: "Press any key to continue..." });
  },

  getDate: async function (property, defaultValue = new Date()) {
    const value = await this.get(property);

    if (!value) {
      return defaultValue;
    }

    const [year, month, day] = value.split(/[ /\-T]/g);
    return new Date(year, month, day);
  },
};
