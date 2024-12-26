/** inheritance
 * inheritance allows a class to reuse the functionality of existing
 * class without rewriting it.
 */

class ConstructPerson {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
  introduce() {
    return `hi i am ${this.name} and i am ${
      this.age
    } years old. I love ${this.hobbies.join(",")}`;
  }
}

const construcPerson1 = new ConstructPerson("jack", 36, ["coding", "learning"]);

const construcPerson2 = new ConstructPerson("alice", 40, ["coding", "sports"]);

console.log(construcPerson1.introduce());

console.log(construcPerson2);

// inherit properties form class
class Student extends ConstructPerson {
  grade: number;
  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }
}

const student1 = new Student("Bob", 10, ["reading", "cricket"], 7);
console.log(student1);
