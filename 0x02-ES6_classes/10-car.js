const CLONE_CAR = Symbol('Returns new object of Car class');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = new Car(this._brand, this._motor, this._color);
    clone[CLONE_CAR] = true;
    return clone;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._color;
    }
    return NaN;
  }
}
