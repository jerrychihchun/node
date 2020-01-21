const EventEmitter = require('events'); //class

const Logger = require('./new_logger.js');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', function(arg) {
	console.log('Listener called', arg);
});

logger.log('message')
