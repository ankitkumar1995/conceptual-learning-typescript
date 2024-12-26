// public The member is accessible everywhere
// private The member is accessible only within the class it is defined
// protected The meber is accessible within the class and its subclass.

class Persons {
  public name: string;
  private age: number;
  protected address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getAge(): number {
    return this.age;
  }
}

const persons = new Persons("john", 24, "123 street");

console.log(persons.getAge());
