'use strict';

const goods = [
  ['Samsung A600', 250, 'Samsung'],
  ['Samsung A620', 260, 'Samsung'],
  ['Apple iPhone 8', 600, 'Apple' ],
];

class Good {
  get model() {
    return this[0];
  }
  get price() {
    return this[1];
  }
  get brand() {
    return this[2];
  }
}

for (const good of goods) {
  Object.setPrototypeOf(good, Good.prototype);
}

const query = ({ model, brand }) => (
  model.includes('A620') &&
  brand === 'Samsung'
);


const res = goods.filter(query);
console.log({ res });

goods.forEach(g => {
  console.log(Array.isArray(g));
});
