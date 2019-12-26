'use strict';

const getProperty = async obj => {
  const model = obj.model;
  if (model) return [null, model];
  else return [new Error('Error 345 - no model')];
};

(async () => {
  const g1 = await getProperty({ model: 'Samsung A620' })
  const g2 = await getProperty({});
  console.log({ g1, g2 });
})();
