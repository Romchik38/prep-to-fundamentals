'use strict';

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
  const cache = {};
  const memoized = (...args) => {
    const key = hash(...args);
    const val = cache[key];
    if (val) return val;
    const res = fn(...args);
    cache[key] = res;
    return res;
  };
  memoized.cache = () => JSON.stringify(cache);
  return memoized;
};

const sum = (a, b) => a + b;

const memoizedSum  = memoize(sum);
const s1 = memoizedSum(1, 2);
const s2 = memoizedSum(2, 2);
const s3 = memoizedSum(1, 2);
console.clear();
console.log({ s1, s2, s3 });
console.log(memoizedSum.cache());
