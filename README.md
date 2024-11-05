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

## Sign transaction
```shell
node sign.js 'transacton in hex'
```

### Docker examples

## Docker build
```shell
docker build -t babylon-btc-sign .
```

## Docker run sign.js
```shell
docker run -v $(pwd)/config.js:/app/config.js babylon-btc-sign node sign.js 'transacton in hex'
```

## Docker run public-key.js
```shell
docker run -v $(pwd)/config.js:/app/config.js babylon-btc-sign node public-key.js
```

