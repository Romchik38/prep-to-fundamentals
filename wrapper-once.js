'use strict';

const once = fn => {
  let flag = true;
  return (...args) => {
    if (flag) {
      const res = fn(...args);
      flag = false;
      return res;
    }
  };
};

const sum = (a, b) => a + b;

console.log(sum(1, 2));
console.log(sum(2, 3));

const onceSum = once(sum);
console.log(onceSum(1, 2));
console.log(onceSum(2, 3));
