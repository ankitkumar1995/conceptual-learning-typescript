function getRandomNumberElement(randomNumbers: number[]): number {
  let randomIndex = Math.floor(Math.random() * randomNumbers.length);
  return randomNumbers[randomIndex];
}
let randomNumbers = [1, 5, 7, 4, 3, 9];
console.log(getRandomNumberElement(randomNumbers));
function getRandomStringElement(randomStrings: string[]): string {
  let randomIndex = Math.floor(Math.random() * randomStrings.length);
  return randomStrings[randomIndex];
}
let colors = ["red", "green", "blue"];
console.log(getRandomStringElement(colors));
function getRandomAnyElement(elements: any[]): any {
  let randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}
console.log(getRandomAnyElement(randomNumbers));
console.log(getRandomAnyElement(colors));

function getRandomElement<T>(elements: T[]) {
  let randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
}
let randomElements = getRandomElement<number>(randomNumbers);
let randomColors = getRandomElement<string>(colors);

// generic function multiple types
function merge<U, V>(object1: U, object2: V) {
  return {
    ...object1,
    ...object2,
  };
}

let mergeObjects = merge(
  { name: "john" },
  { designation: "Software engineer" }
);
console.log(mergeObjects);
