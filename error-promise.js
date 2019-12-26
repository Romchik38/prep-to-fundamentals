'use strict';

const getProperty = obj => new Promise((res, reg) => {
  const model = obj.model;
  if (model) res(model);
  else reg(new Error('Error 345 - no model'));
});

getProperty({ model: 'Samsung A620' })
  .then(data => console.log(data))
  .catch(err => console.log(err));

getProperty({})
  .then(data => console.log(data))
  .catch(err => console.log(err));
