'use strict';

const setIterator = obj => {
  obj[Symbol.iterator] = () => {
    const keys = Object.keys(obj).sort();
    let i = 0;
    return {
      next: () => ({
        value: keys[i],
        done: !keys[i++]
      })
    };
  };
};

const obj1 = {
  name: 'ser',
  lastname: 'rom',
  age: 10,
};

console.log(obj1);
setIterator(obj1);

for (const key of obj1) {
  console.log(key, obj1[key]);
}
