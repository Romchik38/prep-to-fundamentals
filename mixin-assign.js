'use strict';

const obj1 = { name: 'ser', age: 10 };
const objFns = {
  hello() {
    return `Hello, ${this.name}`;
  },
  toString() {
    return `User name: ${this.name}, age: ${this.age}`;
  },
};

Object.assign(obj1, objFns);

const hello = obj1.hello();
const str = obj1.toString();

console.log({ hello, str });
