'use strict';

const obj = {
  numbers: [10, -2, 300],
  [Symbol.iterator]() {
    let count = 0;
    const numb = this.numbers;
    const l = numb.length;
    return {
      next() {
        if (count < l) {
          return { value:  numb[count++], done: false };
        } else {
          return { value:  0, done: true };
        }
      }
    };
  },
};

const obj2 = [10, -2, 300];

console.log(...obj);
console.log(...obj2);
