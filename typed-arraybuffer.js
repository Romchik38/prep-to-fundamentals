'use strict';

const buffer = new ArrayBuffer(1024);

const int8 = new Int8Array(10);
const uint8 = new Uint8Array(buffer);

console.log(ArrayBuffer.isView(int8));
console.log(ArrayBuffer.isView(uint8));
