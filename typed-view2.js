'use strict';

const arr = [-1000, 234, 45, 1023, 0, 45, 678];

const int32 = new Int32Array(arr);

const view = new DataView(int32.buffer, 0);

console.log({ int32 });
console.log({ view });
console.log(view.getInt8(0).toString(16));
console.log(view.getInt32(0).toString(16));
console.log(view.getInt32(4).toString(16));
console.log(view.getInt8(8).toString(16));
