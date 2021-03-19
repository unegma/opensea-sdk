# OpenSea SDK
Utility functions for interacting with OpenSea API

## Usage

`npm install opensea-sdk --save`

```

const openSea = new OpenSeaSDK();
const openSeaTestnet = new OpenSeaSDK('rinkeby');

...
const = openSeaOptions = {};
openSea.mintNFT(openSeaOptions, 'ERC721');
openSea.mintNFT(openSeaOptions, 'ERC1155');
```
