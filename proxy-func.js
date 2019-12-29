'use strict';

const func = (a, b) => a + b;

const p1 = new Proxy(func, {
  apply(target, context, args) {
    const arg1 = args[0];
    return target(arg1, 10);
  },
  getPrototypeOf() {
    console.log('accesing to getPrototypeOf');
    return Array;
  }
});

const res1 = p1(1, 20);
console.log(res1);
const gp1 = Object.getPrototypeOf(p1);
const gpOrigin = Object.getPrototypeOf(func);
console.log({ gp1, gpOrigin });
