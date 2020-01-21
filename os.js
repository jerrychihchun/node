const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('Total Memory: ' + totalMem);

//ES6 or ES2015: ECMAScript 6
//template string
console.log(`Free Memory: ${freeMem}`); //using backtick `
