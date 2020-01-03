'use strict';

const goods = [
  ['Sumsung A600', 250, '/smartphone-samsung-a620'],
  ['Sumsung A350', 150, '/smartphone-samsung-a350'],
  ['Sumsung A200', 50, '/phone-samsung-a200'],
  ['Sumsung A100', 25, '/phone-samsung-a100'],
  ['Nokia N91', 450, '/smartphone-nokia-N91'],
];

const metaData = {
  get model() {
    return this[0];
  },
  get price() {
    return this[1];
  },
  get url() {
    return this[2];
  },
};

for (const item of goods) {
  Object.setPrototypeOf(item, metaData);
}

const query = ({ model, price }) => (
  price > 50 &&
  model.includes('Nokia')
);

const q1 = goods.filter(query);
console.log(q1);
