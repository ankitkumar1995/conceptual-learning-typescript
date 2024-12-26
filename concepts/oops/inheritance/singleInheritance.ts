/** single level inheritance */
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Teacher extends Person {
  payment: number;
  constructor(name: string, payment: number) {
    super(name);
    this.payment = payment;
  }
  dispaly() {
    console.log(`i am ${this.name}`);
    console.log(`my salary is ${this.payment}`);
  }
}
const teacher1 = new Teacher("john", 200000);
console.log(teacher1);
