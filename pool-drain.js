'use strict';

const pool = item => {
  pool.items = pool.items || new Array(10).fill(0)
    .map(() => new Array(1000).fill(0));
  if (item) {
    pool.items.push(item);
    return;
  }
  const elem = pool.items.pop() ||  new Array(1000).fill(0);
  return elem;
};

const a = pool();
const b = pool();

console.log('кол-во в пуле после 2-х запросов', pool.items.length);

a[0] = 125;
a[1] = 201;
b[0] = 1002;
pool(a);
pool(b);

console.log('кол-во в пуле после возврата 2-х элементов', pool.items.length);

console.log('элемет b', pool.items[9]);
console.log('элемет a', pool.items[8]);
