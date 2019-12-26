'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.prompt();

rl.on('line', s => {
  if (s === 'ser') console.log('hello ' + s);
  else console.log('Я Вас не знаю, позови папу');
  rl.close();
});
