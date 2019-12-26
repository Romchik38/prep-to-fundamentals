'use strict';

const sum = (s = 0, o = {
  add: n => (s += n, o),
  toString: () => s,
}) => o;



const s1 = sum().add(1).add(2).add(3);
console.log(s1.toString());
