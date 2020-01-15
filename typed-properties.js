'use strict';

const int32 = new Int32Array(1024);

const BYTES_PER_ELEMENT = int32.BYTES_PER_ELEMENT;
const length = int32.length;
const constructor = int32.constructor;
const buffer = int32.buffer;
const byteOffset = int32.byteOffset;
const byteLength = int32.byteLength;

console.log({
  BYTES_PER_ELEMENT,
  length,
  constructor,
  buffer,
  byteOffset,
  byteLength
});
