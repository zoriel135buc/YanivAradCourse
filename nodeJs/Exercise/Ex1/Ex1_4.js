let arr = [9, 21, 23];
let funcA = (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let sum = arr.reduce((x, y) => x + y);
      resolve(sum);
    }, 2000);
  });
};
let funcB = () => {
  funcA(arr).then((data) => console.log(data * 2));
};
funcB();
