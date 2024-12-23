interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}
interface FututreMailable extends Mailable {
  later(email: string, after: number): boolean;
}

class Mail implements FututreMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}
interface A {
  a(): void;
}

interface B {
  b(): void;
}
interface C {
  c(): void;
}
interface C extends A, B {
  d(): void;
}
// interfaces extending classes
class Control {
  private state: boolean;
}
interface StatefulControl extends Control {
  enable(): void;
}

class Button extends Control implements StatefulControl {
  enable() {}
}
