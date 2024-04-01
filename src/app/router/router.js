import { ID_SELECTOR, Pages } from './pages';

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
    document.addEventListener('DOMContentLoaded', () => {
      const path = this.getCurrentPath();
      this.navigate(path);
    });
    window.addEventListener('popstate', this.browserChangeHandler.bind(this));
    window.addEventListener('hashchange', this.browserChangeHandler.bind(this));
  }

  /**
   * @param {string} url
   */
  navigate(url) {
    const request = this.parseurl(url);
    const pathForFind = request.resource === '' ? request.path : `${request.path}/${ID_SELECTOR}`;
    const route = this.routes.find((item) => item.path === pathForFind);
    if (!route) {
      this.redirectToNotFoundPage();
      return;
    }
    route.callback(request.resource);
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

  browserChangeHandler() {
    const path = this.getCurrentPath();
    this.navigate(path);
  }

  /**
   * @returns {string}
   */
  getCurrentPath() {
    if (window.location.hash) { return window.location.hash.slice(1); }
    return window.location.pathname.slice(1);
  }
}
