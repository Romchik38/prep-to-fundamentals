'use strict';

const Library = function() {
  this.map = Object.create(null);
};

Library.prototype.create = function() {
  this.map[Symbol.iterator] = () => {
    const map = this.map;
    const keys = Object.keys(map);
    let count = 0;
    return {
      next() {
        const key = keys[count];
        if (key) {
          count++;
          return { value: map[key], done: false };
        } else return { value: true, done: true };
      }
    };
  };
};

Library.prototype.has = function(key) {
  const value = this.map[key];
  if (value) return true;
  else return value;
};

Library.prototype.get = function(key) {
  return this.map[key];
};

Library.prototype.set = function(key, value) {
  this.map[key] = value;
};

Library.prototype.clear = function() {
  this.map = Object.create(null);
  this.create();
};

Library.prototype.delete = function(key) {
  if (key) delete this.map[key];
};

Library.prototype.size = function() {
  const keys = Object.keys(this.map);
  return keys.length;
};

Library.prototype.keys = function() {
  return Object.keys(this.map);
};

Library.prototype.values = function() {
  const values = [];
  for (const value of this.map) {
    values.push(value);
  }
  return values;
};

const lib1 = new Library();
lib1.create();
console.clear();
console.log('добавление name: ser ', lib1.set('name', 'ser'));
console.log('добавление age: 10', lib1.set('age', 10));
console.log('проверка наличия поля name', lib1.has('name'));
console.log('получение значения поля name ', lib1.get('name'));
console.log('размер коллекции', lib1.size());
console.log('все значения ', lib1.values());
console.log('Удаление значений ', lib1.clear());
console.log('размер коллекции', lib1.size());
console.log('добавление name: ser ', lib1.set('name', 'ser'));
console.log('добавление fn age: () => 10', lib1.set('age', () => 10));
console.log('размер коллекции', lib1.size());
console.log('получение значения поля age и вызов ()', lib1.get('age')());
console.log('все значения ', lib1.values());
