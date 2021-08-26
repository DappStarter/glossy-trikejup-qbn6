require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name riot situate coin grace father foster gather'; 
let testAccounts = [
"0x98451bdac1c370672664c11d9b83a213e5015caa8c96a4597ea095042e2f76c4",
"0x6952d619913a7673d44cfeaf58c9f1b3d7c21bca02ca65ac1795f71127f6b40f",
"0xf803a36ed0b487950cffbcbae2b811bc665fa952c1e702dbde61a5ea9bb070b6",
"0x641320338e44f6716ebd9710292c33d1f22684cb977b65084de8ef7c2fe7bf54",
"0xb0eee7799fb1e2731a8356310d3dcb74ec276352b5fa2a9efe5253b754b58bea",
"0x09204e54001b1eeef2478b273a2cae6f78e2541191ccabc49a7baaf737996a5a",
"0x2ae887a5837e755476a69e5015a6c2b3b342bab76bb5d66204fc85f722f150fe",
"0x473813529bf00517709622048a82a795a46dfd90e7e171ea12178674c7feba4f",
"0x75533a7329786a63d2ec82382198a83a23906157472ff9ea2db9ee6e0957488f",
"0xcbdf2fe68af877bfc5da6168131490ef9e6f9b13a5f9738d089c21c98a3f5757"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

