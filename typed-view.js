'use strict';

const fs = require('fs');

const FILE_NAME = 'typed-example.txt';
const file = fs.readFileSync(FILE_NAME);

const view = new Int8Array(file);


const charCode = view[0];
const nextCharCode = charCode + 1;

const view1 = new Int32Array(3);
view1[0] = charCode;
view1[1] = nextCharCode;
view1[2] = 10;

console.log(view1);

fs.writeFile(FILE_NAME, view1, err => {
  if (err) throw new Error(err.message);
  console.log(`file ${FILE_NAME} saved`);
});
