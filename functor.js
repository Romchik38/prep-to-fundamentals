'use strict';

const func = (summ = 0) => ({
  add: v => (summ += v, func(summ)),
  toString: () => summ,
});

const f1 = func();
console.log(f1.toString());

const f2 = f1.add(5).add(-6);

console.log(f2.toString());
console.log(f1 === f2);
