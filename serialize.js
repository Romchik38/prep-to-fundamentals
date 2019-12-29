'use strict';

const deserialize = require('./deserialize');

const makeSymbol = s => {
  let symbol = s.toString();
  symbol = symbol.replace(/\(/g, '(\'');
  symbol = symbol.replace(/\)/g, '\')');
  return '[' + symbol + ']:';
};

const types = {
  'string': s => `'${s.toString()}'`,
  'number': n => n.toString(),
  'function': f => f.toString(),
  'symbol': sym => {
    let s = sym.toString();
    s = s.replace('(', '(\'');
    s = s.replace(')', '\')');
    return s;
  },
  'object': obj => {
    if (obj === null) return null;
    if (Array.isArray(obj)) return '[' + obj + ']';
    let str = '{';
    for (const key in obj) {
      if (str.length > 1) str += ',';
      const value = obj[key];
      const res = serialize(value);
      str += key + ':' + res;
    }
    const symbols = Object.getOwnPropertySymbols(obj);
    for (const symbol of symbols) {
      if (str.length > 1) str += ',';
      const value = obj[symbol];
      str += makeSymbol(symbol) + serialize(value);
    }
    str += '}';
    return str;
  }
};

const serialize = obj => {
  const type = typeof obj;
  const serializer = types[type];
  if (serializer) return serializer(obj);
};

console.clear();
const obj4 = {
  name: 'ser rom',
  age:  10,
  greeting: () => 'hello ser',
  [Symbol('hello')]: () => 'Hello from symbol',
  [Symbol('hello2')]: Symbol('hello2'),
  subObject: {
    arr: [1, 2, 4]
  }
};
console.log('before ', obj4);
const s4 = serialize(obj4);
console.log('serialized ', s4);
const ds4 = deserialize(s4);
console.log('deserialized ', ds4);
