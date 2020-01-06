'use strict';

const arrFactory = () => new Array(1000).fill(0);
const duplicate = (factory, n) => new Array(n).fill(0)
  .map(() => factory());

const poolify = (factory, min, size, max) => {
  const items = duplicate(factory, size);
  const delayed = [];
  let allocated = size;

  const pool = par => {
    if (typeof par === 'function') {
      if (items.length < min && allocated < max) {
        const grow = Math.min(size - items.length, max - allocated);
        allocated += grow;
        const inst = duplicate(factory, grow);
        items.push(...inst);
      }
      const item = items.pop();
      if (item) par(item);
      else {
        delayed.push(par);
      }
      return;
    }
    const cb = delayed.shift();
    if (cb) cb(par);
    else {
      items.push(par);
    }
  };
  pool.len = () => items.length;
  pool.items = n => items[n];
  return pool;
};

const pool = poolify(arrFactory, 3, 5, 7);
console.clear();

let a;
pool(x => a = x);
let b;
pool(x => b = x);
let c;
pool(x => c = x);
let d;
pool(x => d = x);
let e;
pool(x => e = x);
let f;
pool(x => f = x);
let g;
pool(x => g = x);
let h;
pool(x => {
  console.log('это отложенный callback');
  h = x;
});


console.log('кол-во в пуле после 8-ми запросов', pool.len());

a[0] = 125;
a[1] = 201;
b[0] = 1002;

pool(a);
pool(b);

console.log('кол-во в пуле после возврата 2-х элементов', pool.len());

pool(c);
pool(d);
pool(e);
pool(f);
pool(g);
pool(h);

console.log('кол-во в пуле после возврата еще 6-х элементов', pool.len());

console.log('элемет b', pool.items(6));
console.log('элемет a', pool.items(0));
