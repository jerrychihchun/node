var x =;
var url = 'http://mylogger.io/log';
//Private implementation details
function log(message) {
	//Send an HTTP request
	console.log(message);
}

//Exported for global uses
module.exports.log = log; //Export a single function
//module.exports.endPoint = url;
