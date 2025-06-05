export class Cuboid {
  // TODO:
  length: number;
  width: number;
  height: number;
  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }
  get volume() {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  // TODO:
  constructor(length: number) {
    super(length, length, length);
  }
}
