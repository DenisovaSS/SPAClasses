import './product.css';
import View from '../../view';
import cardsInfo from '../../../../data/cards';
import CardView from './card/card';
import CardDetailView from './card-detail/card-detail';

const cssClasses = {
  PRODUCT: 'product',
};
export default class ProductView extends View {
  /**
   *@param {import('../../../router/router').default} router
   * @param {string} id
   */
  constructor(router, id = '') {
    /**
     * @type {import('../../view').ViewParams}
     */
    const params = {
      tag: 'section',
      classNames: [cssClasses.PRODUCT],

    };
    super(params);
    // this.showAllCard();

    // this.configureView();
    if (id) { this.showLargeCard(router, id); } else { this.showAllCard(router); }
  }

  /**
     *  @param {import('../../../router/router').default} router
     * @returns {CardView}
     */

  showAllCard(router) {
    cardsInfo.forEach((card) => {
      const smallCardComponent = new CardView(card, router);
      this.elementCreator.addInnerElement(smallCardComponent.getHtmlElement());
    });
  }

  /**
 *
 * @param {string} id
 *  @param {import('../../../router/router').default} router
 */
  showLargeCard(router, id) {
    const selectCard = cardsInfo.find((card) => card.id === id);
    const largeCardComponent = new CardDetailView(selectCard, router);
    this.elementCreator.addInnerElement(largeCardComponent.getHtmlElement());
  }
}
