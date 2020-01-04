'use strict';

const obj1 = {
  name: 'ser',
  age: 10,
};

const obj2 = {
  toString() {
    return `${this.name} ${this.age}`;
  }
};

obj1.__proto__ = obj2;

const str = obj1.toString();

console.log(str);

console.log(obj1.__proto__ === obj2); //true
console.log(obj1.__proto__.__proto__ === Object.prototype); //true
console.log(obj1.__proto__.__proto__.__proto__ === null); //true
console.log(obj2.__proto__ === Object.prototype);  //true
