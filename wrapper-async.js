'use strict';

const fs = require('fs');

const wrapAsync = fn => (...args) => {
  const cb = args.pop();
  const callback = (...param) => {
    console.log('doing something before callback');
    cb(...param);
  };
  args.push(callback);
  fn(...args);
};

const wr1 = wrapAsync(fs.readFile);

wr1('wrapper-async.js', 'utf8', (err, data) => {
  if (err) throw new Error(`ERROR: ${err.message}`);
  if (data) {
    console.log('1st line is: \n', data.split('\n')[0]);
  }
});
