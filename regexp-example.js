'use strict';

const https = require('https');

const url = 'https://hotline.ua/mobile-mobilnye-telefony-i-smartfony/' +
  'samsung-galaxy-s9plus-64gb-black/prices/';
let page = '';

const parse = data => {
  const rx = /<title>[a-zA-Z\x20+\-0-9():,.а-яА-Я]+<\/title>/;
  const res = data.match(rx);
  if (res) {
    console.log(res[0]);
  }
};

const res = https.get(url, res => {
  res.on('data', data => {
    page = page.concat(data.toString());
  });
  res.on('close', () => {
    parse(page);
  });
});
