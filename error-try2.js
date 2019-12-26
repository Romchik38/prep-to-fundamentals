'use strict';

const getProperty = obj => {
  const model = obj.model;
  if (model) return [null, model];
  else return [new Error('No model')];
};

const g1 = getProperty({ model: 'Samsung A620' });
const g2 = getProperty({});

console.log({ g1, g2 });
