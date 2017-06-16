var Http = require('http');

var req = Http.request({
	    host: 'vdabprdproxy.vdab.be', //"http://vdabprdproxy.vdab.be:8080/"
	    port: 8080,
	    method: 'GET',
	//                 path: 'https://www.vanamco.com/ghostlab/' // full URL as path
	//                     }, function (res) {
	//                             res.on('data', function (data) {
	//                                     console.log(data.toString());
	//                                         });
	//                                         });
	//
	//                                         req.end();
