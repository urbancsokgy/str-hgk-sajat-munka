// http://localhost:8080 index.html
// http://localhost:8080/about about.html
// http://localhost:8080/contact contact.html

const http = require('http')
const router = require('./router/router')
const SiteRouter = require('./router/router')
const port =process.env.PORT || 8080
console.log(process.env.PORT)
http.createServer((req, res) =>{
  console.log(router[req.url]);
  // console.log(res);
  router[req.url]
  ? router[req.url](res)
  : router['/404'](res)
   
})
.on('error', err=> console.log('Server error:', err.message))
.on('listening', () => { return console.log('Listen')})
.listen(port)

console.log('Server is running at http://localhost:8080')