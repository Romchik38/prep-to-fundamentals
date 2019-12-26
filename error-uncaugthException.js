'use strict';

process.on('uncaughtException', err => {
  console.log('Error from uncaughtException', err.message);
  process.exit(1);
});

const getProperty = obj => {
  const model = obj.model;
  if (model) return model;
  else {
    throw new Error('Error #345 - no model');
  }
};

const g1 = getProperty({ model: 'Samsung A620' });
const g2 = getProperty({});

console.log({ g1, g2 });
