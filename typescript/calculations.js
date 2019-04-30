"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function sumOfArray(arr) {
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++) {
    //   sum += arr[i]; // sum = sum + arr[i];
    // }
    // return sum;
    return arr.reduce((acc, curr) => acc + curr, 0);
}
exports.sumOfArray = sumOfArray;
const PI = 3.14;
exports.default = PI;
function area(r) {
    return PI * Math.pow(r, 2);
}
