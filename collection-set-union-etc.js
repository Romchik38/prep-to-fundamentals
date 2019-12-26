'use strict';

const union = (a1, a2) => new Set(a1, a2);

const intersection = (a1, a2) => new Set(
  [...a1].filter(e => a2.has(e))
);
const difference = (a1, a2) => new Set(
  [...a1].filter(e => !a2.has(e))
);

const complement = (a1, a2) => difference(a2, a1);

const set = arr => new Set(arr);
const arr1 = set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const arr2 = set([0, 2, 4, 6, 8, 10, 12]);

console.clear();
console.log({ arr1, arr2 });
const u1 = union(arr1, arr2);
console.log('union', u1);
const i1 = intersection(arr1, arr2);
console.log('intersection', i1);
const d1 = difference(arr1, arr2);
console.log('difference', d1);
const c1 = complement(arr1, arr2);
console.log('complement', c1);
