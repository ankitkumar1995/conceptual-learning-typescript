class MathUtil {
  static pi: number = 3.14;
  static calculateArea(radius: number): number {
    return MathUtil.pi * radius * radius;
  }
}
console.log(MathUtil.pi);

console.log(MathUtil.calculateArea(5));
