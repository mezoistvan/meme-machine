require("babel-register");
require("babel-polyfill");
var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = require("./keys").ropsten.infura_key;
var mnemonic = require("./keys").metamask.mnemonic;
var index = require("./keys").metamask.index;

module.exports = {
  networks: {
    // development: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: "4447",
    // },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey, index),
      network_id: "3"
    },
  }
};