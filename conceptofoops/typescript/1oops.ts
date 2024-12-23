class Car {
  makers: string;
  model: string;
  year: number;
  constructor(makers: string, model: string, year: number) {
    this.makers = makers;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    console.log(`Car details: ${this.year} ${this.makers} ${this.model}`);
  }
}

// create aobject from class car
const myCar = new Car("Toyota", "Corolla", 2020);
console.log("Created object from class car ", myCar);
myCar.displayDetails();
