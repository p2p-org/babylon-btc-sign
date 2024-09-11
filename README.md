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

## Sing transaction
```shell
node sing.js 'transacton in hex'
```

