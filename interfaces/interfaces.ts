function getFullName(person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
}

let person = {
  firstName: "john",
  lastName: "doe",
};

console.log(getFullName(person));

interface Person {
  firstName: string;
  lastName: string;
}
function getFullNameInterface(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}
let john = {
  firstName: "john",
  lastName: "doe",
};
console.log(getFullName(john));

function getFullNameDestructure({ firstName, lastName }: Person) {
  return `${firstName} ${lastName}`;
}
let jane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};

let fullName = getFullNameDestructure(jane);
// optional properties
interface OptionalPerson {
  firstName: string;
  middleName?: string;
  lastName: string;
}

let newjane = {
  firstName: "Jane",
  middleName: "K.",
  lastName: "Doe",
  age: 22,
};
function getFullNameOptionalName({
  firstName,
  lastName,
  middleName,
}: OptionalPerson) {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  }
  return `${firstName} ${lastName}`;
}
console.log("optional middle name", getFullNameOptionalName(newjane));
// readonly propeties

interface ReadOnlyPropertyPerson {
  readonly ssn: string;
  firstName: string;
  lastName: string;
}

let readOnlyPropertyPerson: ReadOnlyPropertyPerson;
readOnlyPropertyPerson = {
  ssn: "171-20-0920",
  firstName: "john",
  lastName: "doe",
};

// readOnlyPropertyPerson.ssn = "171-20-0000";
// function types
interface StringFormat {
  (newStr: string, isUpper: boolean): string;
}
let format: StringFormat;

format = function (newStr: string, isUpper: boolean) {
  return isUpper ? newStr.toLocaleUpperCase() : newStr.toLocaleLowerCase();
};
console.log(format("john", true));
// class types
interface Json {
  toJson(): string;
}
class PersonClass implements Json {
  constructor(private firstName: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
let personClass = new PersonClass("john", "doe");
console.log(personClass.toJson());
