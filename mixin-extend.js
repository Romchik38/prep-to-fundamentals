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

const extend = (obj, mixin) => {
  const keys = Object.keys(mixin);
  if (!keys) return obj;
  for (const key of keys) {
    obj[key] = mixin[key];
  }
  return obj;
};

extend(obj1, objFns);

const hello = obj1.hello();
const str = obj1.toString();

console.log({ hello, str });
