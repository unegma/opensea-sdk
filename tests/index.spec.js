import { OpenSeaSDK } from "../src";
import chai from "chai";
const expect = chai.expect;

describe('Tests', () => {
  it('Should mint an NFT', async () => {
    const openSeaSDK = new OpenSeaSDK();
    const result = await openSeaSDK.mintNFT({}, 'ERC721');

    expect(result.data).to.equal('Minted!');
    console.log('Done');
  })
});
