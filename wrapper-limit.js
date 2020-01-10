'use strict';

const limit = (count, fn) => {
  let counter = 0;
  return (...args) => {
    if (counter >= count) return;
    const res = fn(...args);
    counter++;
    return res;
  };
};

const sum = (a, b) => a + b;

const limitSum = limit(2, sum);
console.log(limitSum(1, 2));
console.log(limitSum(2, 2));
console.log(limitSum(3, 2));
