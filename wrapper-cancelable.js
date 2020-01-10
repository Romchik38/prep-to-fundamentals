'use strict';

const cancelable = fn => {
  let flag = true;
  const wrapper = (...args) => {
    if (flag) return fn(...args);
  };
  wrapper.cancel = () => flag = false;
  return wrapper;
};

const sum = (a, b) => a + b;

const wrappedSum = cancelable(sum);
console.log(wrappedSum(1, 2));
wrappedSum.cancel();
console.log(wrappedSum(2, 3));
