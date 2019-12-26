'use strict';

const arr = [1, 2, 3];
const arr2 = [1, 3, 5];

const s1 = new Set([...arr, ...arr2]);
console.log(s1.values());
