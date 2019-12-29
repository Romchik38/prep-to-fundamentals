'use strict';

const obj = {
  model: 'Samsung A620',
  price: 250,
};

const premitive = obj => {
  obj[Symbol.toPrimitive] = function(hint) {
    const types = {
      string: () => this.model,
      number: () => this.price,
      'default': () => JSON.stringify(this),
    };
    return types[hint]();
  };
};

premitive(obj);

const v1 = `${obj}`;
const v2 = Number(obj);
const v3 = obj + '';
console.log({ v1, v2, v3 });
