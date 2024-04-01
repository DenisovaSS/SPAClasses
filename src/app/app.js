import '../style.css';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';
import MainView from './view/main/main';
import Router from './router/router';
import { Pages, ID_SELECTOR } from './router/pages';
import IndexView from './view/main/index/indexM';
import ProductView from './view/main/product/product';
import NOTFoundView from './view/main/not-found/not-found';
import State from './state/state';

export default class App {
  constructor() {
    this.header = null;
    this.main = null;

    const state = new State();
    const routes = this.createRoutes(state);
    this.router = new Router(routes);

    this.createView();
  }

  createView() {
    this.header = new HeaderView(this.router);
    this.main = new MainView();
    const footer = new FooterView();

    document.body.append(this.header.getHtmlElement(), this.main.getHtmlElement(), footer.getHtmlElement());
  }

  /**
   * @param {import('./state/state').default} state
 * @returns {Array<import('./router/router').Route>}
 */
  createRoutes(state) {
    return [
      {
        path: '',
        callback: () => {
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
      {
        path: `${Pages.INDEX}`,
        callback: () => {
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
      {
        path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
        callback: (id) => {
          this.setContent(Pages.PRODUCT, new ProductView(this.router, id));
        },
      },
      {
        path: `${Pages.PRODUCT}`,
        callback: () => {
          this.setContent(Pages.PRODUCT, new ProductView(this.router, ''));
        },
      },
      {
        path: `${Pages.NOT_FOUND}`,
        callback: () => {
          this.setContent(Pages.NOT_FOUND, new NOTFoundView());
        },
      },
    ];
  }

  /**
 * @param {string} pageName
 * @param {import('./view/view').default} view
 */
  setContent(pageName, view) {
    this.header.setSelectedItem(pageName);
    this.main.setContent(view);
  }
}
