// a very very simple script of tests

const assert = require('assert');
require('./date-update');

const d1 = new Date(Date.UTC(2020,8,15,13,50,22,123));
const d2 = new Date(Date.UTC(2019,8,15,23,0,1,987));
const d3 = new Date(Date.UTC(2019,10,11,23,0,1,987));

// trim tests //
assert(d1.trim('h','ms').getTime() === new Date(Date.UTC(1970,0,1,13,50,22,123)).getTime());
assert(d1.trim('M','d').getTime() === d2.trim('M','d').getTime())

// add tests //
assert(d1.add("-1y +0y +2M -4d +10h -55m +5m -21s + 864ms").getTime() === d3.getTime())

console.log('All tests passed');