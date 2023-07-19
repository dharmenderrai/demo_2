// let arr = [1,2,3, 4, 5, 88];
// arr.forEach(function(value, _index, _array){
//   console.log(value);
// });

// function countEven(arr) {
//   let total = 0;
//   arr.forEach(function(val) {
//     if (val % 2 == 0) {
//       total++;
//     }
//   });
//   return total;
// };

// console.log(countEven([1,2,3,4,5]));

// function countZeroes(arr){
//   let total = 0;
//   arr.forEach(
//     function(val){
//     if(val === 0) {
//         total++;
//     }
//   }
//   );
//   return total;
// }

// console.log(countZeroes([2,4,6])); // 0
// console.log(countZeroes([0,1,2,0,1])); // 2

const countZeros_var = function (arr){
  let total = 0;
  arr.forEach(
    function(val){
    if(val === 0) {
        total++;
    }
  }
  );
  return total;
}

console.log(countZeros_var([1, 0, 0, 1, 2, 3]))
let count = 0;
for (let num of [1, 0, 0, 1, 2, 3]) {
  if (num === 0) {
    count++;
  }
}
console.log(count);

// const cities = [
//   "San Francisco",
//   "Berlin",
//   "Tokyo",
//   "Moscow",
//   "Buenos Aires"
// ];

// for (let city of cities) {
//   console.log(city);
// }

// const cities = [
//   "San Francisco",
//   "Berlin",
//   "Tokyo",
//   "Moscow",
//   "Buenos Aires"
// ];

// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }