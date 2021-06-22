// http://localhost:8080 index.html
// http://localhost:8080/about about.html
// http://localhost:8080/contact contact.html
const http = require('http')
const port = 8080
const {readFileSync, createReadStream} = require('fs')

http.createServer((req, res) =>{
  console.log(req.url)
  res.writeHead(200, {'content-type': 'text/html', 'charset': 'utf-8'})
  if(req.url== '/'){
    createReadStream('./views/index.html').pipe(res)
  }
  else if(req.url== '/about'){
    createReadStream('./views/about.html').pipe(res)
  }
  else if(req.url== '/contact'){
    createReadStream('./views/contact.html').pipe(res)
  }
  else {
    // res.writeHead(404, {'content-type': 'text/html', 'charset': 'utf-8'})
    res.statusCode=404
    
    createReadStream('./views/404.html').pipe(res)
  }
   
}).listen(port)

console.log('Server is running at http://localhost:8080')