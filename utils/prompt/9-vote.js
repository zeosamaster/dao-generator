module.exports = {
  voteAddress: {
    description:
      "Address to an existing Vote module (leave empty to create a new one)",
    type: "string",
  },
  voteModuleProposalDelay: {
    description:
      "Delay until proposals opens for voting (in seconds, default 0)",
    type: "number",
  },
  voteModuleProposalDuration: {
    description: "Duration of a proposal vote (default 86400 = 1 day)",
    type: "number",
  },
  voteModuleProposalMinTokens: {
    description:
      "Minimum tokens held to be able to create proposals (default 0)",
    type: "string",
  },
  voteModuleProposalQuorum: {
    description: "Minimum quorum fraction to pass the proposal (default 0)",
    type: "number",
  },
};
