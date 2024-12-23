// Encapsulation
class Person {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public greet(): void {
    console.log(`My name is ${this.name} and I am ${this.age} year old.`);
  }
}
const person = new Person("john", 20);

person.greet();
// Property 'name' is private and only accessible within class 'Person'.
// person.name = "jack";
// Inheritance
class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name} make a sound`);
  }
  move(): void {
    console.log(`${this.name} moves.`);
  }
  sleep(): void {
    console.log(`${this.name} is sleeping.`);
  }
}
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    super.makeSound();
    console.log(`${this.name} barks.`);
  }
}
const dog = new Dog("buddy");
dog.move();
dog.makeSound();
// Polymorphism
class Shape {
  area(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius; // overrirding area method
  }
}
const circle = new Circle(5);
console.log(circle.area());

// Abstraction
abstract class Vehicle {
  abstract start(): void;
  abstract stop(): void;
}
class Cars extends Vehicle {
  start(): void {
    console.log("car started");
  }
  stop(): void {
    console.log("car stopped");
  }
}
class Bike extends Vehicle {
  start(): void {
    console.log("Bike started.");
  }
  stop(): void {
    console.log("Bike stopped.");
  }
}
const car = new Cars();
car.start();

const bike = new Bike();
bike.start();
