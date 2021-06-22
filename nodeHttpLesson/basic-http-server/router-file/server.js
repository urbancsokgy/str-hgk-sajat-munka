// http://localhost:8080 index.html
// http://localhost:8080/about about.html
// http://localhost:8080/contact contact.html

const http = require('http')
const router = require('./router/router')
const SiteRouter = require('./router/router')
const port = 8080

http.createServer((req, res) =>{
  console.log(router[req.url]);
  // console.log(res);
  router[req.url]
  ? router[req.url](res)
  : router['/404'](res)
   
}).listen(port)

console.log('Server is running at http://localhost:8080')