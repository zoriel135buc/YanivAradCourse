let arr = [
  [1, 6, 3, 9],
  [6, 21, 5, 12],
  [4, 11, 23, 1],
];
let arr2 = arr.map((x) => Math.max(...x));
let arr3 = arr2.filter((x) => x > 15 && x < 25);
console.log(arr2);
console.log(arr3);
