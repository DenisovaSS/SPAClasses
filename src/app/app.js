import '../style.css';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';
import MainView from './view/main/main';
import Router from './router/router';
import { Pages } from './router/pages';

export default class App {
  constructor() {
    this.router = new Router();
    this.createView();
  }

  createView() {
    const main = new MainView();
    const header = new HeaderView(this.router);
    const footer = new FooterView();

    document.body.append(header.getHtmlElement(), main.getHtmlElement(), footer.getHtmlElement());
  }

  /**
 * @returns {Array<import('./router/router').Route>}
 */
  createRoutes() {
    return [
      {
        path: '',
        callback: () => {},
      },
      {
        path: `${Pages.INDEX}`,
        callback: () => {},
      },
      {
        path: `${Pages.PRODUCT}`,
        callback: () => {},
      },
      {
        path: `${Pages.NOT_FOUND}`,
        callback: () => {},
      },
    ];
  }
}
