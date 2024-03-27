import '../../../style.css';
import View from '../view';

const cssClasses = {
  MAIN: 'main',

};

export default class MainView extends View {
  constructor() {
    /**
         * @type {import('../../util/element-creator').ElementParams}
         */
    const params = {
      tag: 'main',
      classNames: [cssClasses.MAIN],
      textContent: '',
      callback: null,
    };
    super(params);
  }

  /**
   *
   * @param {View} view
   */
  setContent(view) {
    const element = view.getHtmlElement();
    const currentElement = this.elementCreator.getElement();
    while (currentElement.firstElementChild) {
      currentElement.firstElementChild.remove();
    }
    currentElement.append(element);
  }
}
