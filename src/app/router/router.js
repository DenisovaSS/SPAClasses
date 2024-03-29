/**
 * @typedef {{path: string, callback: function}} Route
 */
export default class Router {
/**
 *
 * @param {Array<Route>} routes
 */
  constructor(routes) {
    this.routes = routes;
  }

  /**
   * @param {string} url
   */
  navigate(url) {
    console.log(url);
  }
}
