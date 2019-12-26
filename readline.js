'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  'input': process.stdin,
  'output': process.stdout,
  'prompt': '> ',
});

rl.prompt();

rl.on('line', s => {
  if (s === 'ser') console.log('hello' + s);
  else throw new Error('bad name');
  rl.close();
});

rl.on('error', e => console.error('Error there in our code: ' + e));
