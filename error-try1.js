'use strict';

const getProperty = obj => {
  const model = obj.model;
  if (model) {
    console.log(model);
  } else {
    throw new Error('can\'t read model');
  }
};

const good = {
  model: 'Samsung A620'
};
const good2 = {};

getProperty(good);
try {
  getProperty(good2);
} catch (e) {
  console.log(e);
}
console.log('Before throw');
getProperty(good2);
console.log('After throw');
