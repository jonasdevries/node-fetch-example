let rp;
if(process.env.USERNAME === 'JDVRIES') {
  rp = require('request-promise').defaults({proxy:'http://vdabprdproxy.vdab.be:8080/', agent:false});  
} else {
   rp = require('request-promise');
}

rp('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res))
    .catch(err => console.log(err));

