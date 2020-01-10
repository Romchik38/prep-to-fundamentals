'use strict';

const wrap = f => {
  const fn = new Function('a', `
  const b = ${f};
  return a + b();
  `);
  return fn;
};

const two = () => 2;

const wrapFn = wrap(two);

console.log(wrapFn.toString());
console.log(wrapFn(1));
