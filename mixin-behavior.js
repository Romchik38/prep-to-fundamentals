'use strict';

const obj1 = {
  name: 'ser',
  age: 10,
  toString() {
    return 'User name';
  },
};

const lazy = function(obj) {
  const toString = obj.toString;
  obj.toString = () => {
    setImmediate(() => {
      console.log(toString());
    });
  };
};

console.clear();
console.log('before');
console.log('toString', obj1.toString());
console.log('after');

lazy(obj1);

console.log('before');
obj1.toString();
console.log('after');
