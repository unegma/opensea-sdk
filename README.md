# OpenSea SDK
Utility functions for interacting with OpenSea API

## Usage

`npm install opensea-sdk --save`

```

const opensea = new OpenSeaSDK();
const openseaTestnet = new OpenSeaSDK('rinkeby');

...
const = openseaOptions = {};
opensea.mintNFT(openseaOptions, 'ERC721');
opensea.mintNFT(openseaOptions, 'ERC1155');
```
