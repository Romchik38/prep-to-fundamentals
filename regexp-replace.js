'use strict';

const str = 'Ha\'ppy_\\ New Year';

const rx = /['_\\]/g;

const res1 = str.replace(rx, '');
console.log(str);
console.log(res1);


const rx2 = /\w+/g;
const toLowerCase = s => s.toLowerCase();

const res2 = res1.replace(rx2, toLowerCase);
console.log(res2);
