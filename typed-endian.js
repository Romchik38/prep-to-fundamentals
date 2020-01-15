'use strict';

const buffer = new ArrayBuffer(2);

const view = new Int8Array(buffer);
view[0] = 97;
view[1] = 98;

console.clear();
console.log('before update: ', view);

const dataView = new DataView(buffer);

console.log({ dataView });
console.log('BigEndian', dataView.getInt16(0).toString(16));
console.log('LittleEndian', dataView.getInt16(0, true).toString(16));
