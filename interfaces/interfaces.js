function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "john",
    lastName: "doe",
};
console.log(getFullName(person));
function getFullNameInterface(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: "john",
    lastName: "doe",
};
console.log(getFullName(john));
function getFullNameDestructure(_a) {
    var firstName = _a.firstName, lastName = _a.lastName;
    return "".concat(firstName, " ").concat(lastName);
}
var jane = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
    age: 22,
};
var fullName = getFullNameDestructure(jane);
var newjane = {
    firstName: "Jane",
    middleName: "K.",
    lastName: "Doe",
    age: 22,
};
function getFullNameOptionalName(_a) {
    var firstName = _a.firstName, lastName = _a.lastName, middleName = _a.middleName;
    if (middleName) {
        return "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    return "".concat(firstName, " ").concat(lastName);
}
console.log("optional middle name", getFullNameOptionalName(newjane));
var readOnlyPropertyPerson;
readOnlyPropertyPerson = {
    ssn: "171-20-0920",
    firstName: "john",
    lastName: "doe",
};
var format;
format = function (newStr, isUpper) {
    return isUpper ? newStr.toLocaleUpperCase() : newStr.toLocaleLowerCase();
};
console.log(format("john", true));
var PersonClass = /** @class */ (function () {
    function PersonClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonClass.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return PersonClass;
}());
var personClass = new PersonClass("john", "doe");
console.log(personClass.toJson());
