import Web3 from 'web3'

let web3
if (typeof web3 !== 'undefined') {
  // Don't lose an existing provider, like Mist or Metamask
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

export default web3