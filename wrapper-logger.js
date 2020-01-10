'use strict';

const fs = require('fs');

const wrappedReadFile = (...args) => {
  console.log('starting reading file');
  fs.readFile(...args);
};

wrappedReadFile('wrapper-logger.js', 'utf8', (err, data) => {
  if (err) throw new Error(`ERROR THERE: ${err.message}`);
  if (data) {
    console.log('1st string from file \n', data.split('\n')[0]);
  }
});
