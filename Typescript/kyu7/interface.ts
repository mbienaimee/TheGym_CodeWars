interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  s: number;
  constructor(s: number) {
    this.s = s;
  }
  area() {
    const side = this.s;
    return side * side;
  }
  perimeter() {
    const side = this.s;
    return side * 4;
  }
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:

  s: number;

  constructor(s: number) {
    this.s = s;
  }

  area() {
    const side = this.s;
    return Math.PI * Math.pow(side, 2);
  }
  perimeter() {
    const side = this.s;
    return Math.PI * 2 * side;
  }
}
