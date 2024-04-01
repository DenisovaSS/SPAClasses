const KEY_FOR_SAVE = 'spaApp';
export default class State {
  constructor() {
    this.fields = this.loadState();
    window.addEventListener('beforeunload', this.saveState.bind(this));
  }

  /**
 *
 * @param {string} name
 * @param {string} value
 */
  setField(name, value) {
    this.fields.set(name, value);
  }

  getField(name) {
    if (this.fields.has(name)) {
      return this.fields.get(name);
    }
    return '';
  }

  saveState() {
    const fieldsObject = Object.fromEntries(this.fields.entries());
    console.log(fieldsObject);
    localStorage.setItem(KEY_FOR_SAVE, JSON.stringify(fieldsObject));
  }

  /**
   * @returns {Map}
   */
  loadState() {
    const storageItem = localStorage.getItem(KEY_FOR_SAVE);
    console.log(storageItem);
    if (storageItem) {
      const fieldArray = JSON.parse(storageItem);
      return new Map(Object.entries(fieldArray));
    }
    return new Map();
  }
}
