var MemeToken = artifacts.require("./MemeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MemeToken);
};
