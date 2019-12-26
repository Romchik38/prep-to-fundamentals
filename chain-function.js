'use strict';

const sum = a => b => c => a + b + c;


const sum1 = sum(1)(2)(3);

console.log(sum1);
