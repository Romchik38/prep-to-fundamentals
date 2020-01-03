'use strict';

const obj1 = { name: 'ser', age: 10, };
const obj2 = { name: 'rom', age: 11, };

obj1.hello = function() {
  return `hello ${this.name}`;
};

console.clear();
const hello1 = obj1.hello();
console.log({ hello1 });

const fnHello = function(obj) {
  obj.hello = function() {
    return `hello ${this.name}`;
  };
  return obj;
};

fnHello(obj2);
const hello2 = obj2.hello();
console.log({ hello2 });

console.log({ obj1, obj2 });
