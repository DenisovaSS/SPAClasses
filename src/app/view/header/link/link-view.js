import './link.css';
import View from '../../view';

const cssClasses = {
  ITEM: 'nav-item',
  ITEM_SELECTED: 'nav-item__selected',
};
export default class LinkView extends View {
  /**
     * @param {import('../header').Page} pageParam
     * @param {Map<LinkView>} linkElements
     */
  constructor(pageParam, linkElements) {
    const params = {
      tag: 'a',
      classNames: [cssClasses.ITEM],
      textContent: pageParam.name,
      callback: pageParam.callback,
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

  /**
   * @param {import('../header').Page} pageParam
   */
  configureView() {
    // this.elementCreator.setTextContent(pageParam.name);
    // this.elementCreator.setCallback(pageParam.callback);

    const element = this.elementCreator.getElement();
    element.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}
