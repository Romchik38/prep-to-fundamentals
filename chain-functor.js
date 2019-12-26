'use strict';

const sum = (s = 0) => ({
  add: n => sum(s + n),
  toString: () => s,
});

const s1 = sum().
  add(1).
  add(2).
  add(3);

console.log(s1.toString());
