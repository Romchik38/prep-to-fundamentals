'use strict';

const curry = fn => (...args) => {
  if (fn.length === args.length) return fn(...args);
  return curry(fn.bind(null, ...args));
};

const sum = (a, b, c) => a + b + c;

const curried = curry(sum);

const c1 = curried(1);
const c2 = c1(2);
const c3 = c2(3);

console.log(c1);
console.log(c2);
console.log(c3);
