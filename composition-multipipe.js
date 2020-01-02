'use strict';

const multiPipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const double = a => a + a;
const square = a => a * a;

const multi1 = multiPipe(square, double);
const m1 = multi1(2);

console.log(m1);
