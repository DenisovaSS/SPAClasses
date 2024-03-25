import '../style.css';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const headerView = new HeaderView();
    const footerView = new FooterView();
    document.body.append(headerView.getHtmlElement(), footerView.getHtmlElement());
  }
}
