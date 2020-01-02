'use strict';

const composeLoop = (...fns) => x => {
  if (fns.length === 0) return x;
  let res = x;
  for (let i = fns.length - 1; i >= 0; i--) {
    res = fns[i](res);
  }
  return res;
};

const double = a => a + a;
const square = a => a * a;

const multi1 = composeLoop(square, double);
const m1 = multi1(2);

console.log(m1);
