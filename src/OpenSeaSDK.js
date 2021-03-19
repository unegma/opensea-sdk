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
}

export default OpenSeaSDK;
