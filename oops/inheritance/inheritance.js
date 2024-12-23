/** inheritance
 * inheritance allows a class to reuse the functionality of existing
 * class without rewriting it.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConstructPerson = /** @class */ (function () {
    function ConstructPerson(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    ConstructPerson.prototype.introduce = function () {
        return "hi i am ".concat(this.name, " and i am ").concat(this.age, " years old. I love ").concat(this.hobbies.join(","));
    };
    return ConstructPerson;
}());
var construcPerson1 = new ConstructPerson("jack", 36, ["coding", "learning"]);
var construcPerson2 = new ConstructPerson("alice", 40, ["coding", "sports"]);
console.log(construcPerson1.introduce());
console.log(construcPerson2);
// inherit properties form class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.grade = grade;
        return _this;
    }
    return Student;
}(ConstructPerson));
var student1 = new Student("Bob", 10, ["reading", "cricket"], 7);
console.log(student1);
