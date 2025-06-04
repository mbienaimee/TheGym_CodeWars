declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  get surfaceArea(): number {
    return 6 * this.length * this.length;
  }

  set surfaceArea(area: number) {
    this.length = Math.sqrt(area / 6);
  }

  get volume(): number {
    return this.length * this.length * this.length;
  }

  set volume(vol: number) {
    this.length = Math.cbrt(vol);
  }
}
