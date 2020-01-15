'use strict';

const buffer = new ArrayBuffer(2);

const view = new DataView(buffer);
const int8 = new Int8Array(buffer);
const int16 = new Int16Array(buffer);

const before = view.getInt16(0);

view.setInt8(0, 0);
view.setInt8(1, 1);

const after80 = view.getInt8(0);
const after81 = view.getInt8(1);
const after16 = view.getInt16(0);

console.log(buffer);

console.log({
  before,
  after80,
  after81,
  after16
});

console.log({
  int8,
  int16
});
