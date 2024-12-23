class Person {
  name: string = "john";
  age: number = 32;
  hobbies: string[] = ["readimg", "sports"];
}

// instance of class

const person1: Person = new Person();
console.log(person1);
console.log(person1.hobbies);

// define class with constructor
class ConstructPerson {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const construcPerson1 = new ConstructPerson("jack", 36, ["coding", "learning"]);

const construcPerson2 = new ConstructPerson("alice", 40, ["coding", "sports"]);

console.log(construcPerson1);

console.log(construcPerson2);
