'use strict';

const getProperty = (obj, cb) => {
  const model = obj.model;
  if (model) cb(null, model);
  else cb(new Error('No model'));
};

const cb = (err, data) => {
  if (err) console.log(err);
  if (data) console.log(data);
};

getProperty({ model: 'Samsung A620' }, cb);
getProperty({}, cb);
