'use strict';

const sum = (a, b) => a + b;

label: {
  console.log(sum(1, 2));
  label2: {
    const s1 = sum(2, 3);
    if (s1 === 5) break label;
    label3: {
      console.log(sum(3, 4));
    }
  }
}
