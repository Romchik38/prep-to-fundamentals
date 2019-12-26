'use strict';

const key = Symbol('main_login');

const obj = {
  name: 'ser',
  role: 'admin',
  [key]: () => 'hello',
};

const k1 = obj['key'];
const k2 = obj['main_login'];
const k3 = obj[key];

console.log({ k1, k2, k3 });
console.log(k3());
