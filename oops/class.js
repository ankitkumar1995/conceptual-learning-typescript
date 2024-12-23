var Person = /** @class */ (function () {
    function Person() {
        this.name = "john";
        this.age = 32;
        this.hobbies = ["readimg", "sports"];
    }
    return Person;
}());
// instance of class
var person1 = new Person();
console.log(person1);
console.log(person1.hobbies);
// define class with constructor
var ConstructPerson = /** @class */ (function () {
    function ConstructPerson(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return ConstructPerson;
}());
var construcPerson1 = new ConstructPerson("jack", 36, ["coding", "learning"]);
var construcPerson2 = new ConstructPerson("alice", 40, ["coding", "sports"]);
console.log(construcPerson1);
console.log(construcPerson2);
