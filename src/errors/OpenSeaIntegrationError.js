class OpenSeaIntegrationError extends Error {
  /**
   * OpenSeaIntegrationError
   * @param {string} message
   */
  constructor (message) {
    super(message);
    this.name = 'OpenSeaIntegrationError';
  }
}

export default OpenSeaIntegrationError;
