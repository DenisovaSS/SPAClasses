import '../style.css';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';
import MainView from './view/main/main';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const headerView = new HeaderView();
    const mainView = new MainView();
    const footerView = new FooterView();
    document.body.append(headerView.getHtmlElement(), mainView.getHtmlElement(), footerView.getHtmlElement());
  }
}
