import  { Psbt, initEccLib, networks} from 'bitcoinjs-lib';
import { signPsbtWithKeyPathAndScriptPath } from '@okxweb3/coin-bitcoin';
import { readFileSync} from 'fs';
import * as tinysecp from 'tiny-secp256k1';

initEccLib(tinysecp);
const config = JSON.parse(readFileSync('./config.json'));


const network = config.network === 'testnet' ?  networks.testnet : networks.bitcoin; // Используйте bitcoin.networks.bitcoin для основной сети

const txHex = process.argv[2];

const psbtHex = signPsbtWithKeyPathAndScriptPath(txHex, config.privateKey, network);

const psbt = Psbt.fromHex(psbtHex, { network });

const signedTx = psbt.extractTransaction().toHex();

console.log('Signed Transaction Hex:', signedTx);