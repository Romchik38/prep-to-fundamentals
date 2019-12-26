'use strict';

const indexOf = (arr, value) => {
  const l = arr.length;
  let i = 0;
  while (i < l) {
    const v = arr[i];
    if (v !== value) {
      i++;
      continue;
    };
    return i;
  }
};

const skues = [345, 4985, 3756, 341, 1002, 45]
const index = indexOf(skues, 341);
const index2 = indexOf(skues, 87);
const index3 = indexOf(skues, 45);


console.log({ index, index2, index3 });
