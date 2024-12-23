function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let token = [1, 57, 4, 2, 9];
console.log(getRandomNumberElement(token));

let colors = ["red", "green", "blue"];
console.log(getRandomStringElement(colors));

/**
 * the logic of getRandomNumberElement() and getRandomStringElement() methods are same
 * we can use any type, by doing this we need to write just one function.
 *
 */

function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
console.log(getRandomAnyElement(token));
console.log(getRandomAnyElement(colors));
/**
 * this solution works fine. however, it has a drawbrack
 * it doesnt allow us to enforce the type of the returned element.
 * in other words,it is not type-safe.
 *
 * a better solution to avoid code duplication while preserving the type is to use generics
 */

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
console.log(getRandomElement<number>(token));
console.log(getRandomElement<string>(colors));
