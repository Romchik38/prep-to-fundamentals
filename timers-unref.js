'use strict';

//этот таймер не сработает
const t = setTimeout(() => {
  console.log('hello 5000');
}, 5000);

t.unref();

// этот таймер сработает
const t2 = setTimeout(() => {
  console.log('hello');
}, 2000);

t2.unref();

setTimeout(() => {
  console.log('hello 3000');
}, 3000);
