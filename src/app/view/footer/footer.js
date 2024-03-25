import './footer.css';
import ElementCreator from '../../util/element-creator';

const cssClasses = {
  FOOTER: 'footer',
};
const TEXT = 'SPA example app';
export default class FooterView {
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
      tag: 'footer',
      classNames: [cssClasses.FOOTER],
      textContent: TEXT,
      callback: null,
    };
    const elementCreator = new ElementCreator(params);
    return elementCreator;
  }
}
