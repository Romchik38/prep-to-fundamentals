'use strict';

const str = 'Happy New Year';
const rx1 = /\w+/gi;

const res1 = str.match(rx1);
console.log(res1);

console.log(rx1.flags);
console.log(rx1.global);

console.log({
  'ignoreCase': rx1.ignoreCase,
  'multiline': rx1.multiline,   //^ и $ для каждой строки будут свои
  'source': rx1.source,
  'unicode': rx1.unicode,
  'sticky': rx1.sticky,
  'lastIndex': rx1.lastIndex,
});
