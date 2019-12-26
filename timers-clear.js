'use strict';

const interval1 = setInterval(() => {
  console.log('this be never shown');
}, 2000);

clearInterval(interval1);

const timeout1 = setTimeout(() => {
  console.log('this be never shown # 2');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout1);
}, 1000);

const immediate = setImmediate(() => {
  console.log('this be never shown');
});

clearImmediate(immediate);
