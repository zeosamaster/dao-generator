const prompt = require("../utils/prompt");

module.exports = async function revokeCreatorRoles({ tokenModule }) {
  try {
    const shouldRevokeCreatorRole = await prompt.get("shouldRevokeCreatorRole");
    if (shouldRevokeCreatorRole.toLowerCase() !== "y") {
      console.log("Not revoking roles");
      return;
    }

    const ownerPublicKey = await prompt.get("ownerPublicKey");

    console.log(`Revoking roles for ${ownerPublicKey}`);
    await tokenModule.revokeAllRolesFromAddress(ownerPublicKey);
    console.log(`Successfully revoked roles for ${ownerPublicKey}`);
  } catch (error) {
    console.error("Failed to revoke roles for creator", error);
  }
};
