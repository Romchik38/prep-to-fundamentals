'use strict';

const seq = fn => x => {
  if (typeof x === 'number') {
    return fn(x);
  }
  return seq(n => fn(x(n)));
};

const s1 = seq(x => x + 7)(x => x * 2)(5);

console.log(s1);
// Результат: 17

const s2 = seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7);

console.log(s2);
// Результат: 3
