
interface Calculator {
  PI: 3.14;
  name: 'Mike';
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

let calc: Calculator = {
  name: 'Mike',
  PI: 3.14,
  add(a, b) {
    return a + b;
  },
  subtract: (a, b) => {
    return a + b;
  }
}