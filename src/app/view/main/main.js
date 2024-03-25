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
}
