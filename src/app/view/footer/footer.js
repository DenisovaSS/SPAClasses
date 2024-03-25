import './footer.css';
import View from '../view';

const cssClasses = {
  FOOTER: 'footer',
};
const TEXT = 'SPA example app';
export default class FooterView extends View {
  constructor() {
    /**
    * @type {import('../../util/element-creator').ElementParams}
    */
    const params = {
      tag: 'footer',
      classNames: [cssClasses.FOOTER],
      textContent: TEXT,
      callback: null,
    };
    super(params);
  }
}
