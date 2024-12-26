class Shape {
  constructor(color) {
    this.color = color;
  }
  describe() {
    return `this shape is ${this.color}`;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  circleArea() {
    return Math.PI * this.radius * this.radius;
  }
}
class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }
  squareArea() {
    return this.sideLength * this.sideLength;
  }
}

const redCircle = new Circle("red", 5);
console.log(redCircle);
console.log(redCircle.describe());
console.log(redCircle.circleArea());

const blueSquare = new Square("blue", 6);
console.log(blueSquare);
console.log(blueSquare.describe());
console.log(blueSquare.squareArea());

// abstract class doesnt allow to create instamce
const newShape = new Shape("new shape designs");
