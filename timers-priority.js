'use strict';

const callback = a => {
  console.log(' hello from sync callback', a);
  return ++a;
};
const inc = (numb, callback) => callback(numb);

console.clear();
console.log('calling sync calling # 1', inc(2, callback));

console.log('calling setImmediate, #2');
setImmediate(() => {
  console.log('hello from setImmediate');
});
console.log('calling setTimeout 0, #3');
setTimeout(() => {
  console.log('hello from setTimeout');
}, 0);

console.log('calling process.nextTick # 4');
process.nextTick(() => {
  console.log('hello from nextTick');
});

console.log('calling setInerval 0, # 5');
const interval = setInterval(() => {
  clearInterval(interval);
  console.log('hello from setInterval');
}, 0);
