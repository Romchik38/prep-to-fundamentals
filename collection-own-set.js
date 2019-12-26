'use strict';

const union = (a1, a2) => {
  const u = a1.slice(0);
  for (const item of a2) {
    if (!a1[item]) u.push(item);
  }
  return u;
};

const intersection = (a1, a2) => {
  const i = [];
  for (const item of a1) {
    if (a2.includes(item)) i.push(item);
  }
  return i;
};

const difference = (a1, a2) => {
  const d = [];
  for (const item of a1) {
    if (!a2.includes(item)) d.push(item);
  }
  return d;
};

const complement = (a1, a2) => difference(a2, a1);

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [0, 2, 4, 6, 8, 10, 12];

console.clear();
console.log({ arr1, arr2 });
const u1 = union(arr1, arr2);
console.log('union', u1);
const i1 = intersection(arr1, arr2);
console.log('intersection', i1);
const d1 = difference(arr1, arr2);
console.log(d1);
const c1 = complement(arr1, arr2);
console.log(c1);
