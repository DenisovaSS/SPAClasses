import './indexM.css';
import View from '../../view';
import InputFieldCreator from '../../../util/input-field/input_field_creator';

const cssClasses = {
  INDEXM: 'indexM',
};
const FIELD_TEXT_ONE = 'Поле для ввода 1';
const FIELD_TEXT_TWO = 'Поле для ввода 2';
export default class IndexView extends View {
  /**
   *
   * @param {import('../../../state/state').default} state
   */
  constructor(state) {
    /**
         * @type {import('../../view').ViewParams}
         */
    const params = {
      tag: 'section',
      classNames: [cssClasses.INDEXM],

    };
    super(params);
    this.state = state;

    this.configureView();
  }

  configureView() {
    let paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_ONE,
      callback: (event) => this.keyUPHandler(event, FIELD_TEXT_ONE),
    };
    let inputCreator = new InputFieldCreator(paramsInput);
    inputCreator.setValue(this.state.getField(FIELD_TEXT_ONE));
    this.elementCreator.addInnerElement(inputCreator.getElement());
    paramsInput = {
      tag: 'input',
      classNames: [],
      textContent: FIELD_TEXT_TWO,
      callback: (event) => this.keyUPHandler(event, FIELD_TEXT_TWO),
    };
    inputCreator = new InputFieldCreator(paramsInput);
    inputCreator.setValue(this.state.getField(FIELD_TEXT_TWO));
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  /**
 *
 * @param {KeyboardEvent} event
 * @param {string} fieldName
 */
  keyUPHandler(event, fieldName) {
    if (event.target instanceof HTMLInputElement) {
      this.state.setField(fieldName, event.target.value);
    }
  }
}
