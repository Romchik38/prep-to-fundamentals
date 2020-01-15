'use strict';

const arr = [97, 98, 99];

const int32arr = Int32Array.from(arr);
const int32arr2 = Int32Array.of(97, 98, 99);
console.log({ int32arr, int32arr2 });

let str1 = '';
let str2 = '';

for (const char of int32arr) {
  str1 += String.fromCharCode(char);
}
for (const char of int32arr2) {
  str2 += String.fromCharCode(char);
}
console.log({ str1, str2 });
