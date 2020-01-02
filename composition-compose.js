'use strict';

const compose = (fn1, fn2) => x => fn1(fn2(x));

const double = a => a + a;
const square = a => a * a;

const comp1 = compose(square, double);
const c1 = comp1(2);

console.log(c1);
