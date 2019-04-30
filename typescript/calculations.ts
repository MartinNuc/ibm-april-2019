
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

export function sumOfArray(arr: number[]): number {
  // let sum = 0;
  // for(let i = 0; i < arr.length; i++) {
  //   sum += arr[i]; // sum = sum + arr[i];
  // }
  // return sum;
  return arr.reduce((acc, curr) => acc + curr, 0);
}

const PI = 3.14;
export default PI;


function area(r: number): number {
  return PI * r ** 2;
}

