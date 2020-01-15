'use strict';

const length = new Int8Array(10);
const typed = new Int16Array(length);
const object = new Int32Array([1, 267, 1000]);
const buffer = new Uint32Array(typed.buffer);

console.log({
  length,
  typed,
  object,
  buffer
});
