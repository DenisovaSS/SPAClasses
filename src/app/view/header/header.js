import './header.css';
import View from '../view';
import ElementCreator from '../../util/element-creator';
import LinkView from './link/link-view';
import { Pages } from '../../router/pages';

const CssClasses = {
  HEADER: 'header',
  NAV: 'nav',
  // ITEM: 'nav-item',
  // ITEM_SELECTED: 'nav-item__selected',
};
const NamePages = {
  INDEX: 'Главная',
  PRODUCT: 'Карточки',
};

/**
 * @typedef {{ name: string, callback: function }} Page
 */

export default class HeaderView extends View {
  /**
     * @param {import('../../router/router').default} router
     */
  constructor(router) {
    /**
         * @type {import('../view').ViewParams}
         */
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
    };
    super(params);
    this.headerLinkElements = new Map();
    this.configureView(router);
  }

  /**
     * @param {import('../../router/router').default} router
     */
  configureView(router) {
    /**
         * @type {import('../../util/element-creator').ElementParams}
         */
    const navParams = {
      tag: 'nav',
      classNames: [CssClasses.NAV],
      textContent: '',
      callback: null,
    };
    const creatorNav = new ElementCreator(navParams);
    this.elementCreator.addInnerElement(creatorNav);

    Object.keys(NamePages).forEach((key) => {
      const linkParams = {
        name: NamePages[key],
        callback: () => router.navigate(Pages[key]),
      };
      const linkElement = new LinkView(linkParams, this.headerLinkElements);
      creatorNav.addInnerElement(linkElement.getHtmlElement());
      this.headerLinkElements.set(Pages[key], linkElement);
    });

    // this.elementCreator.addInnerElement(creatorNav);
  }

  /**
 *
 * @param {string} NamePage
 */
  setSelectedItem(NamePage) {
    const linkComponent = this.headerLinkElements.get(NamePage);
    if (linkComponent instanceof LinkView) {
      linkComponent.setSelectedStatus();
    }
  }
}
