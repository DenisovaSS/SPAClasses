import { Pages } from './pages';

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
    const request = this.parseurl(url);
    const pathForFind = request.resource === '' ? request.path : `${request.path}/${request.resource}`;
    const route = this.routes.find((item) => item.path === pathForFind);
    if (!route) {
      this.redirectToNotFoundPage();
      return;
    }
    route.callback();
  }

  /**
   *@typedef {{path: string, resource:string }} UserRequest
   * @param {string} url
   * @returns {UserRequest}
   */
  parseurl(url) {
    const result = {};
    const path = url.split('/');
    [result.path = '', result.resource = ''] = path;
    return result;
  }

  redirectToNotFoundPage() {
    const notFoundPage = this.routes.find((item) => item.path === Pages.NOT_FOUND);
    if (notFoundPage) {
      this.navigate(notFoundPage.path);
    }
  }
}
