# babylon-btc-sign

## Init service
#### Install dependencies
```shell
yarn install
```
#### Set private key in config.js

```json
{
  "privateKey": "PRIVATE_KEY_WIF",
  "network": "testnet or bitcoin"
}
```

## Print your public key
```shell
node public-key.js
```

## Sing transaction
```shell
node sing.js 'transacton in hex'
```

