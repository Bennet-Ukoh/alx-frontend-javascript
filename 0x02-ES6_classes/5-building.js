export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Abstract class "Building" cannot be instantiated directly.');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error(`Class "${this.constructor.name}" must override evacuationWarningMessage() method.`);
    }
  }
}
