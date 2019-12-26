'use strict';

const Sum = function(n = 0) {
  this.res = n;
};

Sum.prototype.add = function(n) {
  this.res += n;
  return this;
};

Sum.prototype.toString = function() {
  return this.res;
};

const s1 = new Sum();

s1.add(1).add(2).add(3);
console.log(s1.toString());
