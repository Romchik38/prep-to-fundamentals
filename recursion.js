'use strict';

const sum = (a, b) => {
  while (a) {
    return sum(a - 1, b + a);
  }
  return b;
};

sum(2, 4);
