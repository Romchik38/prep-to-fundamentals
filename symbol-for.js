'use strict';

const symb1 = Symbol('hello');
console.log(symb1);

const symb2 = Symbol.for('for hello');
console.log(symb2);

const key1 = Symbol.keyFor(symb1);
console.log(key1);

const key2 = Symbol.keyFor(symb2);
console.log(key2);
