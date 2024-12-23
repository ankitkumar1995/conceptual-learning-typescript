function convertToArray1(input) {
  return [input];
}
convertToArray1(5);
convertToArray1("ema");
convertToArray1({ name: "john" });

function convertToArray2(input: number): number[] {
  return [input];
}
convertToArray2(5);
/*
 * convertToArray2("ema");
 * Argument of type 'string' is not assignable to parameter of type 'number'
 */
/*
 * convertToArray2({ name: "john" });
 * Argument of type '{ name: string; }' is not assignable to parameter of type 'number'
 */
function convertToArray3<T>(input: T): T[] {
  return [input];
}
convertToArray1(5);
convertToArray1("ema");
convertToArray1({ name: "john" });

function getIndexOfArrayItem1<T>(array: T[], arrayItem: T) {
  return array.map((item) => item === arrayItem);
}
const getIndexOfArrayItem2 = <T>(array: T[], arrayItem: T) => {
  return array.map((item) => item === arrayItem);
};
const array1 = [55, 99, 77];
getIndexOfArrayItem1(array1, 77);
getIndexOfArrayItem2(array1, 99);

function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}
createArrayPair({ name: "john" }, 20);
