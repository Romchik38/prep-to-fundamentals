'use strict';

const multiCompose = (...fns) => x => fns.reverse().reduce((v, f) => f(v), x);

const double = a => a + a;
const square = a => a * a;

const multi1 = multiCompose(square, double);
const m1 = multi1(2);

console.log(m1);
