'use strict';

const pow = (a, b) => (b === 1 ? a * 1 : a * pow(a, b - 1));

const res = pow(2, 4);
console.log(res);

const pow2 = (a, b) => {
  let res = 0;
  for (let i = 0; i < b; i++) {
    res += a * a;
  }
  return res;
};

const res2 = pow2(2, 4);
console.log(res2);
