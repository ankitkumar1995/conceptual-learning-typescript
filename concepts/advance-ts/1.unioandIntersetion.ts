export type Name = { name: string };
export type Age = { age: number };

type Union = Name | Age | (Name & Age);
type Intersection = Name & Age;

const name = { name: "john" };
const age = { age: 20 };
/*
 * nameAndAge assign to union defined type havnt give
 * error this is typescript structral unlucky sideeffect
 *
 */
const nameAndAge = { name: "john", age: 20 };

let union: Union;
union = name;
union = age;
// typescript mental model breaks it need to show error but it work fine
union = nameAndAge;

let intersection: Intersection;
// intersection = name;
// intersection = age;
// assign name and age to intersection give error

intersection = nameAndAge;
function filter(union: Union) {
  if ("name" in union) {
    union.name;
  }
  if ("age" in union) {
    union.age;
  }
  if ("name" in union && "age" in union) {
    // type Union = Name | Age
    // typescript give error as union is definee either name or age
    union.name;
    union.age;
  }
}
filter(union);
