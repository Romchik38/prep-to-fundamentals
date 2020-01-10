'use strict';

const timeout = (fn, time) => {
  let timer = setTimeout(() => {
    timer = null;
  }, time);
  return (...args) => {
    if (timer) {
      const res = fn(...args);
      clearTimeout(timer);
      timer = null;
      return res;
    }
  };
};

const sum = (a, b) => a + b;
const timeSum1 = timeout(sum, 1000);
const timeSum2 = timeout(sum, 2000);

setTimeout(() => {
  console.log('sum1 is ', timeSum1(1, 2));
  console.log('sum2 is ', timeSum2(1, 2));
}, 1500);
