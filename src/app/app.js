import '../style.css';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';
import MainView from './view/main/main';
import Router from './router/router';
import { Pages, ID_SELECTOR } from './router/pages';

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
        callback: async () => {
          const { default: IndexView } = await import('./view/main/index/indexM');
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
      {
        path: `${Pages.INDEX}`,
        callback: async () => {
          const { default: IndexView } = await import('./view/main/index/indexM');
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
      {
        path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
        callback: async (id) => {
          const { default: ProductView } = await import('./view/main/product/product');
          this.setContent(Pages.PRODUCT, new ProductView(this.router, id));
        },
      },
      {
        path: `${Pages.PRODUCT}`,
        callback: async () => {
          const { default: ProductView } = await import('./view/main/product/product');
          this.setContent(Pages.PRODUCT, new ProductView(this.router, ''));
        },
      },
      {
        path: `${Pages.NOT_FOUND}`,
        callback: async () => {
          const { default: NOTFoundView } = await import('./view/main/not-found/not-found');
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
