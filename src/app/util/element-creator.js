/**
 * @typedef {{
* tag: string,
* classNames: Array<string>,
* textContent: string,
* callback: function,
* }} ElementParams
*/

export default class ElementCreator {
  /**

     * @param {ElementParams} param
     */
  constructor(param) {
    this.element = null;
    this.createElement(param);
  }

  /**

   * @param {ElementParams} param

   */
  createElement(param) {
    this.element = document.createElement(param.tag);
    this.setCssClasses(param.classNames);
    this.setTextContent(param.textContent);
    this.setCallback(param.callback);
  }

  getElement() {
    return this.element;
  }

  /**
   *
   * @param {HTMLElement| ElementCreator} element
   */
  addInnerElement(element) {
    if (element instanceof ElementCreator) {
      this.element.append(element.getElement());
    } else {
      this.element.append(element);
    }
  }

  /**
   *  @param {Array<string>} cssClasses
   */
  setCssClasses(cssClasses) {
    cssClasses.map((className) => this.element.classList.add(className));
  }

  /**
     * @param {string} text
     */
  setTextContent(text) {
    this.element.textContent = text;
  }

  /**
     * @param {function} callback
     */
  setCallback(callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener('click', (event) => callback(event));
    }
  }
}
