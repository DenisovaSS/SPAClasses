import './product.css';
import View from '../../view';
import cardsInfo from '../../../../data/cards';
import CardView from './card/card';
import CardDetailView from './card-detail/card-detail';

const cssClasses = {
  PRODUCT: 'product',
};
export default class ProductView extends View {
  constructor() {
    /**
     * @type {import('../../view').ViewParams}
     */
    const params = {
      tag: 'section',
      classNames: [cssClasses.PRODUCT],

    };
    super(params);
    this.showAllCard();

    // this.configureView();
  }

  // configureView() {
  //   cardsInfo.forEach((card) => {
  //     const cardView = new CardView(card);
  //     this.elementCreator.addInnerElement(cardView.getHtmlElement());
  //   });
  // }
  /**
     * @param {import('../../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
  createSmallCardsToView(card) {
    const smallCardComponent = new CardView(card);
    const callbackMoreInfo = () => this.showLargeCard(card);
    smallCardComponent.setCallback(callbackMoreInfo);
    return smallCardComponent;
  }

  /**
     * @param {import('../../../../data/cards').CardInfo} card
     * @returns {CardView}
     */
  createLargeCardToView(card) {
    const largeCardComponent = new CardDetailView(card);
    const callbackToProduct = () => this.showAllCard();
    largeCardComponent.setCallback(callbackToProduct);
    return largeCardComponent;
  }

  showAllCard() {
    this.clearView();
    cardsInfo.forEach((card) => {
      const smallCardComponent = this.createSmallCardsToView(card);
      this.elementCreator.addInnerElement(smallCardComponent.getHtmlElement());
    });
  }

  showLargeCard(card) {
    this.clearView();
    const largeCard = this.createLargeCardToView(card);
    this.elementCreator.addInnerElement(largeCard.getHtmlElement());
  }

  clearView() {
    const htmlElement = this.elementCreator.getElement();
    while (htmlElement.firstElementChild) {
      htmlElement.firstElementChild.remove();
    }
  }
}
