import Car from './10-car';

const CLONE_CAR = Symbol('returns new object');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clone = new Car(this._brand, this._motor, this._color);
    clone[CLONE_CAR] = true;
    return clone;
  }
}
