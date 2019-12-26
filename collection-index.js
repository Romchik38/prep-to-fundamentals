'use strict';

const goods = [
  { model: 'Samsung A620', sku: 2398, price: 150 },
  { model: 'Nokia N90', sku: 2039, price: 450 },
  { model: 'Samsung A320', sku: 2498, price: 50 },
  { model: 'Samsung S9', sku: 12398, price: 650 },
  { model: 'Fly F3400', sku: 1301, price: 100 },
  { model: 'Alcatel J100', sku: 6754, price: 71 },
  { model: 'Samsung A120', sku: 12398, price: 25 },
];

const index = (arr, name) => {
  const map = new Map();
  for (const item of arr) {
    map.set(item[name], item);
  }
  return map;
};

const indexModel = index(goods, 'model');
console.log(indexModel);
const g1 = indexModel.get('Alcatel J100');
console.log(g1);
