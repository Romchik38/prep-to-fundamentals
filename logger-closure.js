'use strict';

const colors = {
  info: '\x1b[1;37m',
  warning: '\x1b[1;31m',
};

const logger = arg => {
  const color = colors[arg] || colors.info;
  const log = s => {
    console.log(color + s + '\x1b[0;37m');
  };
  return log;
};

const warning = logger('warning');
const info = logger();

warning('error in string 1');
info('Info message');
console.log('Standart message');
