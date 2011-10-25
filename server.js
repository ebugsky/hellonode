var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, nodejs!')
  res.end();
}).listen(8100);


console.log('> http server has started on port 8100');
