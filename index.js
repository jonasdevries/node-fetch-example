const request = require('request').defaults({proxy:'http://vdabprdproxy.vdab.be:8080/', agent:false});

request('https://jsonplaceholder.typicode.com/posts/1', function(err, res, body) {
	console.log('ERR:'+err);	
		console.log('RES'+res);	
	    	console.log('BODY:'+body);	
	})

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received  
});