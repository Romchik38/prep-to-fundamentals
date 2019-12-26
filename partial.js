'use strict';
const partial = fn => x => y => fn(x, y);

const sum = (a, b) => a + b;

const partialed = partial(sum);

const s1 = partialed(1)(2);
console.log(s1);
