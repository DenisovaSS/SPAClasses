import './card.css';
import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
  CONTAINER: 'card',
  FIELD: 'card__field',
  BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'Подробнее...';
export default class CardView extends View {
  /**
     *
     * @param {import('../../../../../data/cards').CardInfo} card
     */
  constructor(card) {
    /**
     * @type {import('../../../view').ViewParams}
     */
    const params = {
      tag: 'article',
      classNames: [CssClasses.CONTAINER],

    };
    super(params);
    this.callback = null;
    this.card = card;
    this.configureView();
  }

  configureView() {
    /**
     * @type {import('../../../../util/element-creator').ElementParams}
     */
    const paramsLabel = {
      tag: 'label',
      classNames: [CssClasses.FIELD],
      textContent: this.card.name,
      callback: null,
    };
    const labelCreator = new ElementCreator(paramsLabel);

    const paramsButton = {
      tag: 'button',
      classNames: [CssClasses.BUTTON],
      textContent: CARD_TEXT_MORE,
      callback: this.buttonClickHandler.bind(this),
    };
    const buttonCreator = new ElementCreator(paramsButton);
    this.elementCreator.addInnerElement(labelCreator);
    this.elementCreator.addInnerElement(buttonCreator);
  }

  /**
     * @param {function} callback
     */
  setCallback(callback) {
    if (typeof callback === 'function') {
      this.callback = callback;
    }
  }

  buttonClickHandler() {
    this.callback();
  }

  getCardInfo() {
    return this.card;
  }
}
