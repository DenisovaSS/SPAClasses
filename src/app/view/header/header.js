import './header.css';
import ElementCreator from '../../util/element-creator';

const cssClasses = {
  HEADER: 'header',
  NAV: 'nav',
};

export default class HeaderView {
  constructor() {
    this.elementCreator = this.createView();
  }
  /**
  * @returns {HTMLElement}
   */

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  /**
  * @returns {ElementCreator}
   */

  createView() {
    const params = {
      tag: 'header',
      classNames: [cssClasses.HEADER],
      textContent: '',
      callback: null,
    };
    const elementCreator = new ElementCreator(params);
    return elementCreator;
  }
}
