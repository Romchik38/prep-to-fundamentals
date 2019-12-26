'use strict';

const arr = [1, 2, 3, 4];

const r1 = arr.reduceRight((acc, val) => acc + val, '');

console.log({ arr, r1 });
