'use strict';

const str = 'Happy New 2020 Year';

const rx = /\w+/g;

const res = rx.exec(str);
console.log(res, rx.lastIndex);
const res2 = rx.exec(str);
console.log(res2, rx.lastIndex);
const res3 = rx.exec(str);
console.log(res3, rx.lastIndex);
