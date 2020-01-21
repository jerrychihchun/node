function sayHello(name) {
	console.log('Hello, ' + name + '!'); //console: global object
} 

sayHello('Jerry');

/* Useful functions
setTimeout()
clearTimeout()

setInterval()
clearInterval()
*/

//A file is a module
console.log(module); //not global

/*
var logger = require('./logger.js'); //require function to load modules
*/
const logger = require('./logger.js'); //better
console.log(logger);
logger.log('Greetings');

const smartLog = require('./logger.js');
smartLog('Hello, World!');