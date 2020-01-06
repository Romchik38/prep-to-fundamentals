'use strict';

const arrFactory = () => new Array(1000).fill(0);

const poolify = (factory, size) => {
  const items = new Array(size).fill(0)
    .map(() => factory());
  const pool = item => {
    if (item) {
      items.push(item);
      return;
    }
    const elem = items.pop() || factory();
    return elem;
  };
  pool.len = () => items.length;
  pool.items = n => items[n];
  return pool;
};

const pool = poolify(arrFactory, 5);

const a = pool();
const b = pool();

console.clear();
console.log('кол-во в пуле после 2-х запросов', pool.len());

a[0] = 125;
a[1] = 201;
b[0] = 1002;

pool(a);
pool(b);

console.log('кол-во в пуле после возврата 2-х элементов', pool.len());

console.log('элемет b', pool.items(4));
console.log('элемет a', pool.items(3));
