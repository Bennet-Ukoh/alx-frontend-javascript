export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Abstract class "Building" cannot be instantiated directly.');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
