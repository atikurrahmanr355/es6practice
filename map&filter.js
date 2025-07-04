const numbers = [2,3,4,5,6,8];
const output = [];

// for(let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// const square = element => element * element;


// const result = numbers.map(function(element) {
//     return element * element;
// });
// const square = numbers.map(element => element*element);
// console.log(square);

const search = numbers.filter(element => element %2 == 0);

console.log(search);

const isThere = numbers.find(element => element > 4);
console.log(isThere);