import './indexM.css';
import View from '../../view';
import InputFieldCreator from '../../../util/input-field/input_field_creator';

const cssClasses = {
  INDEXM: 'indexM',
};
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';
export default class IndexView extends View {
  constructor() {
    /**
     * @type {import('../../../util/element-creator').ElementParams}
     */
    const params = {
      tag: 'section',
      classNames: [cssClasses.INDEXM],
      textContent: '',
      callback: null,
    };
    super(params);

    this.firstField = '';
    this.secondField = '';

    this.configureView();
  }

  configureView() {
    let paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_ONE,
      callback: (event) => this.keyUPHandler(event, 'firstinput'),
    };
    let inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());
    paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_TWO,
      callback: (event) => this.keyUPHandler(event, 'secondinput'),
    };
    inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  /**
 *
 * @param {KeyboardEvent} event
 * @param {string} fieldName
 */
  keyUPHandler(event, fieldName) {
    if (event.target instanceof HTMLInputElement) {
      this[fieldName] = event.target.value;
    }
  }
}
