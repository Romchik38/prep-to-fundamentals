'use strict';

const str = 'Hello childrens, I am your ded moroz';

const char = str.charCodeAt(4);
const charPoint = str.codePointAt(4);
console.log(str);
console.log('charCodeAt: 4', char);
console.log('fromCharCode: ' + char, String.fromCharCode(char));
console.log('codePointAt: 4', charPoint);
console.log('fromCodePoint: ' + charPoint, String.fromCharCode(charPoint));

console.log('\u0a10');
