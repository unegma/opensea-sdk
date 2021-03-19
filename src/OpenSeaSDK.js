import { OpenSeaIntegrationError } from "./errors";

/**
 * Base Utilities Class
 */
class OpenSeaSDK {

  /**
   * @typedef { "rinkeby" | "mainnet" } network
   */

  /**
   *
   * @param {network} network
   */
  constructor(network= "mainnet") {
    this.network = network;
  }

  /**
   * @typedef { "ERC1155" | "ERC721" } type
   */

  /**
   *
   * @param {Object} openSeaOptions
   * @param {type} type
   * @returns {Promise<{data: string}>}
   */
  async mintNFT(openSeaOptions, type) {

    return { data: "Minted!" }
  }
}

export default OpenSeaSDK;
