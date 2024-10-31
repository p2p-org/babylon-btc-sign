const  { ECPairFactory, networks } = require('ecpair');
const tinysecp = require('tiny-secp256k1');
const { readFileSync} = require("fs");
const ECPair = ECPairFactory(tinysecp);
const config = JSON.parse(readFileSync('./config.json'));

const network = config.network === 'testnet' ?  networks.testnet : networks.bitcoin;

console.log('Your public key is:', Buffer.from(ECPair.fromWIF(config.privateKey, network).publicKey).toString('hex'));
