import './input_field.css';
import ElementCreator from '../element-creator';

const InputFieldCssClasses = {
  CONTAINER: 'field__container',
  CONTAINER_REVERSE: 'field__container_reverse',
};
export default class InputFieldCreator extends ElementCreator {
  /**

   * @param {import('../element-creator').ElementParams} param

   */
  createElement(param) {
    this.element = document.createElement('div');
    this.setCssClasses([InputFieldCssClasses.CONTAINER]);
    this.setCssClasses(param.classNames);
    this.setCallback(param.callback);
    this.inputElement = document.createElement('input');
    this.labelElement = document.createElement('label');
    this.setTextContent(param.textContent);
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
      this.element.addEventListener('keyup', (event) => callback(event));
    }
  }
}
