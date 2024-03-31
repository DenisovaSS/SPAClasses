import './card.css';
import View from '../../../view';
import ElementCreator from '../../../../util/element-creator';
import { Pages } from '../../../../router/pages';

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
     * @param {import('../../../../router/router').default} router
     */
  constructor(card, router) {
    /**
     * @type {import('../../../view').ViewParams}
     */
    const params = {
      tag: 'article',
      classNames: [CssClasses.CONTAINER],

    };
    super(params);
    this.card = card;
    this.router = router;
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
    this.elementCreator.addInnerElement(labelCreator);
    const paramsButton = {
      tag: 'button',
      classNames: [CssClasses.BUTTON],
      textContent: CARD_TEXT_MORE,
      callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}/${this.card.id}`),
    };
    const buttonCreator = new ElementCreator(paramsButton);

    this.elementCreator.addInnerElement(buttonCreator);
  }

  /**
 *
 * @param {string} path
 */
  buttonClickHandler(path) {
    this.router.navigate(path);
  }

  getCardInfo() {
    return this.card;
  }
}
