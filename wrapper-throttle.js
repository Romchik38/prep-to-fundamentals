'use strict';
// throttle вызывает ф заданное число раз в единицу времени

const throttle = (ms, counts, fn) => {
  let last = null;
  let counter = 0;
  let allCounts = 0;
  return (...args) => {
    allCounts++;
    if (counter === 0 && counts > 0) {
      setTimeout(() => {
        counter = 0;
        if (last) {
          const lastRes = last();
          allCounts = 0;
          last = null;
          return lastRes;
        }
      }, ms);
    }
    if (counter < counts) {
      counter++;
      const res = fn(...args);
      console.log(`allowed call - counter:${counter}, res:${res}`);
      return res;
    } else {
      last = () => {
        const res = fn(...args);
        console.log(`last call - try:${allCounts}, res:${res}`);
      };
    }
  };
};

const sum = (a, b) => a + b;

const s1 = throttle(500, 2, sum);

const interv = setInterval(() => {
  s1(2, 3);
}, 100);

setTimeout(() => {
  clearInterval(interv);
}, 1500);
