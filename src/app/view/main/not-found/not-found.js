import './not-found.css';
import View from '../../view';

const CssClasses = {
  ERROR: 'not-found',
};
const TEXT_NOT_FOUND = 'Error. Page not found';
export default class NOTFoundView extends View {
  constructor() {
    /**
             * @type {import('../../view').ViewParams}
             */
    const params = {
      tag: 'section',
      classNames: [CssClasses.ERROR],

    };
    super(params);

    this.configureView();
  }

  configureView() {
    this.elementCreator.setTextContent(TEXT_NOT_FOUND);
  }
}
