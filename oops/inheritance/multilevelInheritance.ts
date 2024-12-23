/** multilevel inheritance */
/**
 * In multilevel inheritance, the derived class acts as the base class for another derived class.
 * The newly created derived class acquires the properties and behivor of other base classes.
 *
 */
class Vehicle {
  type(): void {
    console.log("car");
  }
}
class Car extends Vehicle {
  brand(): void {
    console.log("abc");
  }
}

class CarModel extends Car {
  model(): void {
    console.log("abc2021");
  }
}

let car = new CarModel();

car.brand();
car.type();
car.model();
