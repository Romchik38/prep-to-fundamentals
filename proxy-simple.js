'use strict';

const obj = {
  name: 'ser',
  age: 10,
};

const p1 = new Proxy(obj, {
  get(obj, key) {
    return obj[key];
  },
  set(obj, key, value) {
    if (key === 'age') {
      console.log('the age is: ' + obj[key]);
      return true;
    }
    obj[key] = value;
    return true;
  },
  deleteProperty(obj, key) {
    console.log('trying to del key: ' + key);
    return true;
  },
  ownKeys(obj) {
    console.log('gettin keys from object');
    return Object.keys(obj);
  }
});

console.log(p1.name);
p1.age = 20;
console.log(p1.age);
delete p1.age;
console.log(p1.age);
const keys = Object.keys(p1);
console.log(keys);
