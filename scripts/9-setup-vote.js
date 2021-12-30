const prompt = require("../utils/prompt");

module.exports = async function setupVoteModule({ sdk, app, tokenModule }) {
  console.log("");
  console.log("-------");
  console.log("Step 9 - Setup Governance & Treasury");

  try {
    const voteAddress = await prompt.get("voteAddress");

    if (voteAddress) {
      const voteModuleModule = sdk.getVoteModule(voteAddress);
      console.log("Loaded existing Vote module:", voteAddress);
      return voteModuleModule;
    }

    const daoName = await prompt.get("daoName");

    const voteModuleConfigs = {
      name: `${daoName} Governance Contract`,
      votingTokenAddress: tokenModule.address,
      proposalStartWaitTimeInSeconds:
        Number(await prompt.get("voteModuleProposalDelay")) || 0,
      proposalVotingTimeInSeconds:
        Number(await prompt.get("voteModuleProposalDuration")) || 24 * 60 * 60,
      minimumNumberOfTokensNeededToPropose:
        (await prompt.get("voteModuleProposalMinTokens")) || "0",
      votingQuorumFraction: 0,
      // Number(await prompt.get("voteModuleProposalQuorum")) || 0,
    };

    console.log("Deploying Vote module");
    const voteModule = await app.deployVoteModule(voteModuleConfigs);
    console.log("Successfully deployed Vote module:", voteModule.address);

    return voteModule;
  } catch (error) {
    console.log("Failed to deploy vote module", error);
  }
};
