'use strict';

const composeRecursion = (...fns) => x => {
  if (fns.length === 0) return x;
  let fn = fns.pop();
  return composeRecursion(...fns)(fn(x));
};

const double = a => a + a;
const square = a => a * a;

const multi1 = composeRecursion(square, double);
const m1 = multi1(2);

console.log(m1);
