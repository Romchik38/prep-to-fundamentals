'use strict';

class Logger {
  constructor(arg) {
    this.color = Logger.colors[arg] || Logger.colors.info;
  }
  log(s) {
    console.log(this.color + s + '\x1b[0;37m');
  }
}

Logger.colors = {
  info: '\x1b[1;37m',
  warning: '\x1b[1;31m',
};

const warning = new Logger('warning');
const info = new Logger();

warning.log('error in string 1');
info.log('Info message');
console.log('Standart message');
