'use strict';

const goods = [
  ['sumsung', 'nokia'],
  ['A620', '240'],
  [100, 234]
];
const weakMap = new WeakMap();

weakMap.set(goods[0], 'brands');
weakMap.set(goods[1], 'models');
weakMap.set(goods[2], 'price');

console.log(weakMap);
