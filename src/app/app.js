import '../style.css';
import FooterView from './view/footer/footer';
import HeaderView from './view/header/header';
import IndexView from './view/main/index/indexM';
import MainView from './view/main/main';

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const mainView = new MainView();
    const headerView = new HeaderView(mainView);
    const footerView = new FooterView();

    mainView.setContent(new IndexView());
    document.body.append(headerView.getHtmlElement(), mainView.getHtmlElement(), footerView.getHtmlElement());
  }
}
