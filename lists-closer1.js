'use strict';

const list = data => {
  const elem = data => {
    const next = list(data);
    next.prev = elem;
    return next;
  };
  elem.data = data;
  return elem;
};

const obj1 = { name: 'ser' };
const obj2 = { name: 'rom' };
const obj3 = { name: 'mas' };

const l1 = list(obj1)(obj2)(obj3);
console.dir(l1.data, { depth: 20 });
console.dir(l1.prev, { depth: 20 });
