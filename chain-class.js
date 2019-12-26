'use strict';

class Sum {
  constructor(n = 0) {
    this.res = n;
  }
  add(n) {
    this.res += n;
    return this;
  }
  toString() {
    return this.res;
  }
}

const s1 = new Sum();

s1.add(10).
  add(200).
  add(-30);

console.log(s1.toString());
