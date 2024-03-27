import './card.css';
import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';

const CssClasses = {
  CONTAINER: 'card',
  FIELD: 'card__field',
  BUTTON: 'card__button',
};
const CARD_TEXT_MORE = 'Подробнее...';
export default class cardView extends View {
  /**
     *
     * @param {import('../../../../../data/cards').CardInfo} card
     */
  constructor(card) {
    /**
             * @type {import('../../../util/element-creator').ElementParams}
             */
    const params = {
      tag: 'section',
      classNames: [CssClasses.CONTAINER],
      textContent: '',
      callback: null,
    };
    super(params);

    this.configureView(card);
  }

  /**
 * @param {import('../../../../../data/cards').CardInfo} card
 */
  configureView(card) {
    const paramsLabel = {
      tag: 'label',
      classNames: [CssClasses.FIELD],
      textContent: card.name,
      callback: null,
    };
    const labelCreator = new ElementCreator(paramsLabel);
    const paramsButton = {
      tag: 'button',
      classNames: [CssClasses.BUTTON],
      textContent: CARD_TEXT_MORE,
      callback: null,
    };
    const buttonCreator = new ElementCreator(paramsButton);
    this.elementCreator.addInnerElement(labelCreator);
    this.elementCreator.addInnerElement(buttonCreator);
  }
}
