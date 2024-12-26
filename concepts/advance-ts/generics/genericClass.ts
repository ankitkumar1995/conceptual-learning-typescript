// class className1<T> {}
// // multiple generic types
// class className2<K, T> {}

// // generic constraints
// type TypeA = {};
// class className3<T extends TypeA> {}

class Stack<T> {
  private elements: T[] = [];
  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T) {
    if (this.isFull()) {
      throw new Error("the stack is overflow");
    }
    this.elements.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("The stack is empty");
    }
  }
}

let tokens = new Stack<number>(5);
console.log(tokens);
function randomBetween(low: number, high: number) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

// randomBetween() function generate random number for pushing into stack

while (!tokens.isFull()) {
  let randomDigit = randomBetween(1, 20);
  console.log(`push ${randomDigit} into the stack`);
  tokens.push(randomDigit);
}

while (!tokens.isEmpty()) {
  let randomDigit = tokens.pop();
  console.log(`pop ${randomDigit} from the stack`);
}

// stck of string
let words = "The quick brown fox jumps over the lazy dog".split(" ");

let wordStack = new Stack<string>(words.length);
words.forEach((word) => wordStack.push(word));

while (!wordStack.isEmpty()) {
  console.log(wordStack.pop());
}
