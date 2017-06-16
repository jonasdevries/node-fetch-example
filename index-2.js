const request = require('request').defaults({proxy:'http://vdabprdproxy.vdab.be:8080/', agent:false});

const options = {
	url: 'https://jsonplaceholder.typicode.com/posts/1',
	method: 'GET',
	headers: {
		'Accept': 'application/json',
		'Accept-Charset': 'utf-8',
		'User-Agent': 'my-reddity-client'
	}
};

request(options, function(err, res, body) {
	let json = JSON.parse(body);
	console.log(json);		    	
});