import { PI, pow } from "./math.mjs";
export default class {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return PI * pow(this.radius, 2);
  }
}
