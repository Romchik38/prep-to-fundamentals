'use strict';

const factory = (name, age) => ({ name, age });

const f1 = factory('ser', 10);
const f2 = factory('rom', 11);
console.log({ f1, f2 });
