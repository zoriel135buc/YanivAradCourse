let arr = [
  [1, 6, 3, 9],
  [6, 21, 5, 12],
  [4, 11, 23, 1],
];

let funcA = (arr) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let sum = 0;
      arr.forEach((x) => {
        x.forEach((element) => {
          sum += element;
        });
      });
      resolve(sum);
    }, 2000);
  });
};

let funcB = async () => {
  let total = await funcA(arr).then((data) => data * 2);
  console.log(total);
};
funcB();
