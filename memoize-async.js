'use strict';

const fs = require('fs');
const files = [
  'memoize-testFile1.txt',
  'memoize-testFile2.txt',
  'memoize-testFile3.txt'
];

const hash = (...args) => {
  let key = '';
  for (const val of args) {
    if (key.length > 0) {
      key += `:${val.toString()}`;
    } else key += val.toString();
  }
  return key;
};

const memoize = fn => {
  const cache = Object.create(null);
  const memoized = (...args) => {
    const length = args.length - 1;
    const cb = args[length];
    if (typeof cb !== 'function') {
      const key = hash(...args);
      const val = cache[key];
      if (val) return val;
      const res = fn(...args);
      cache[key] = res;
      return res;
    } else {
      const argums = args.slice(0, length);
      const key = hash(...argums);
      const val = cache[key];
      if (val) {
        console.log(`Из кеша: ${key}`);
        cb(...val);
        return;
      }
      args[length] = (err, data) => {
        console.log(`Добавление в кеш: ${key}`);
        cache[key] = [err, data];
        cb(err, data);
      };
      fn(...args);
    }
  };
  memoized.cache = () => new Object(cache);
  return memoized;
};

const cb = (err, data) => {
  if (err) throw new Error(`There is an error: ${err}`);
  console.log(data);
};

const memoizedReadFile  = memoize(fs.readFile);

console.clear();

memoizedReadFile(files[0], 'utf8', cb);

setTimeout(() => {
  memoizedReadFile(files[1], 'utf8', cb);
}, 500);

setTimeout(() => {
  memoizedReadFile(files[0], 'utf8', cb);
}, 1000);

setTimeout(() => {
  memoizedReadFile(files[2], 'utf8', cb);
}, 2000);

setTimeout(() => {
  console.log('CACHE -----------------------\n', memoizedReadFile.cache());
}, 4000);
