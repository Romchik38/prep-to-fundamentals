'use strict';

const obj = {
  name: ['hello', ['ser', ['rom', 'rom38']]]
};

console.clear();
console.log('log', obj);
console.dir(obj);
console.dir(obj, { showHidden: true, depth: 4 });

console.time('timer 1000');

setTimeout(() => {
  console.timeEnd('timer 1000');
}, 1000);

console.error('Error there');
console.trace('trace there');

const goods = [
  { model: 'samsung a620', price: 200, warranty: 12 },
  { model: 'samsung a120', price: 50, warranty: 12 },
];

console.table(goods);
