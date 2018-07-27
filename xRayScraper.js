const Xray = require('x-ray');
const request = require('request');
const fs = require('fs');

const xray = new Xray();
const url = 'https://www.amazon.com/dp/B074SHSN7P/ref=sspa_dk_detail_1?th=1'
xray(url, 'li#SalesRank', [{
    salesRank: ''
}]).write('result.json');