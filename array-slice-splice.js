'use strict';

const arr = [10, 40, -5, 100, 30, 56];

const slice = arr.slice(2);
const slice2 = arr.slice(0, 2);

console.log({  arr, slice, slice2 });

const splice = arr.splice(0, 1);
console.log({ arr, splice });
