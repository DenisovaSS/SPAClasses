import './card-detail.css';
import ElementCreator from '../../../../util/element-creator';
import CardView from '../card/card';
import { Pages } from '../../../../router/pages';

const CssClasses = {
  CONTAINER: 'card',
  CONTAINER_FULL: 'card__full',
  FIELD: 'card__field',
  BUTTON: 'card__button',
};
const CARD_TEXT_BACK = 'Назад...';

export default class CardDetailView extends CardView {
  configureView() {
    this.elementCreator.setCssClasses([CssClasses.CONTAINER_FULL]);
    /**
     * @type {import('../../../../util/element-creator').ElementParams}
     */
    let labelParams = {
      tag: 'label',
      classNames: [CssClasses.FIELD],
      textContent: this.card.name,
      callback: null,
    };
    let creatorLabel = new ElementCreator(labelParams);
    this.elementCreator.addInnerElement(creatorLabel);
    labelParams = {
      tag: 'label',
      classNames: [CssClasses.FIELD],
      textContent: this.card.description,
      callback: null,
    };
    creatorLabel = new ElementCreator(labelParams);
    this.elementCreator.addInnerElement(creatorLabel);
    const buttonParams = {
      tag: 'button',
      classNames: [CssClasses.BUTTON],
      textContent: CARD_TEXT_BACK,
      callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}`),
    };
    const creatorButton = new ElementCreator(buttonParams);
    this.elementCreator.addInnerElement(creatorButton);
  }
}
