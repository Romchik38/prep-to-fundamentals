'use strict';

const pipe = (fn1, fn2) => x => fn2(fn1(x));

const double = a => a + a;
const square = a => a * a;

const pipe1 = pipe(square, double);
const p1 = pipe1(2);

console.log(p1);
