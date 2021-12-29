module.exports = {
  shouldSetTreasuryBalance: {
    description: "Do you want to transfer tokens to the treasury? [y/N]",
    type: "string",
  },
  treasuryPercentage: {
    description:
      "Percentage of total supply to transfer (min: 0, max: 100, default: 0)",
    type: "number",
    conform: function (value) {
      return Number(value) >= 0 && Number(value) <= 100;
    },
  },
};
