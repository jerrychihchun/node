const EventEmitter = require('events'); //class

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
	log(message) { //function inside a class = method
	//Send an HTTP request
	console.log(message);
	//Raise an event
	this.emit('messageLogged', { id: 1 ,url: 'http://' });
	}
}

//Exported for global uses
module.exports = Logger;

