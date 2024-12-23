// Encapsulation
class Product {
  private id: number;
  name: string;
  private price: number;
  private stock: number;

  constructor(id: number, name: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  //   Encapsulate method to update stock

  public updateStock(quantity: number): void {
    if (quantity < 0) throw new Error("Invalid stock");
    this.stock += quantity;
  }
  public getDetails(): string {
    return `Product: ${this.name}, Price: $${this.price}`;
  }

  public getStock(): number {
    return this.stock;
  }
}
// Inheritance
class DigitalProduct extends Product {
  private fileSize: number;
  constructor(id: number, name: string, price: number, fileSize: number) {
    super(id, name, price, 1);
    this.fileSize = fileSize;
  }
  public getDetails(): string {
    return `${this.fileSize} MB`;
  }
}

// create ebook object
const eBook = new DigitalProduct(2, "E-bbok", 15, 5);
console.log("Created eBook objects", eBook);

console.log(eBook.getDetails());

// Abstraction
abstract class PaymentMethod {
  abstract processPayment(amount: number): void;
}
class CreditCardPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}
class PayPalPayment extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing paypal payment of $${amount}`);
  }
}
function checkout(paymentMethod: PaymentMethod, amount: number) {
  paymentMethod.processPayment(amount);
}
const payment = new PayPalPayment();

checkout(payment, 50);
// Polymorphism
class PhysicalProduct extends Product {
  private weight: number;
  constructor(
    id: number,
    name: string,
    price: number,
    stock: number,
    weight: number
  ) {
    super(id, name, price, stock);
    this.weight = weight;
  }
  // override the base getDetails method
  public getDetails(): string {
    return `${super.getDetails()}, weight is ${this.weight} kg`;
  }
  public applyDiscount(): void {
    console.log(`Apply a discount to physical product ${this.name}`);
  }
}
class ServiceProduct extends Product {
  duration: number;
  constructor(id: number, name: string, price: number, duration: number) {
    super(id, name, price, 1);
    this.duration = duration;
  }
  public getDetails(): string {
    return `${super.getDetails()}, Duration is ${this.duration} hours`;
  }
  public applyDiscount(): void {
    console.log(`Applying a discount to service product ${this.name}`);
  }
}
// polymorphism in action
const products: Product[] = [
  new PhysicalProduct(3, "phone", 600, 100, 0.2),
  new ServiceProduct(4, "course online", 200, 10),
];
