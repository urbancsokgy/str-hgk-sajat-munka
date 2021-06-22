const http = require('http')
const port = 8080
const {readFileSync, createReadStream} = require('fs')

http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-type' : 'text/html'
    })
  createReadStream('./index.html').pipe(res)
   
}).listen(port)

console.log('Server is running at http://localhost:8080')