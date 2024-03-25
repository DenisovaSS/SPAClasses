import './link.css';
import View from '../../view';

const cssClasses = {
  ITEM: 'nav-item',
  ITEM_SELECTED: 'nav-item__selected',
};
export default class LinkView extends View {
  /**
     * @param {import('../header').Page} pageParam
     * @param {Array<LinkView>} linkElements
     */
  constructor(text, linkElements) {
    const params = {
      tag: 'a',
      classNames: [cssClasses.ITEM],
      textContent: text,
      callback: null,
    };
    super(params);
    this.linkElements = linkElements;
    this.configureView();
  }

  setSelectedStatus() {
    this.linkElements.forEach((linkElement) => linkElement.setNotSelectedStatus());

    const element = this.elementCreator.getElement();
    element.classList.add(cssClasses.ITEM_SELECTED);
  }

  setNotSelectedStatus() {
    const element = this.elementCreator.getElement();
    element.classList.remove(cssClasses.ITEM_SELECTED);
  }

  configureView() {
    const element = this.elementCreator.getElement();
    element.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}
