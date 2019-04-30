
let arr = [1,2,3,4,5];

let result = arr.map(item => item * 2);
result = arr.filter((item) => {
  return item > 2;
})
result = arr.some(item => item === 20)

result = arr.reduce((acc, item) => {
  console.log(acc);
  console.log(item);
  return acc + item;
}, 0)
console.log(result);












// class Component {
//   add(item) {

//   }
// }


// let x = (item) => item > 2;
// (item) => {
//   return item > 2;
// }

// function(item) {
//   return item > 2;
// }









