const http = require('http')
const port = 8084
const {readFileSync, createReadStream} = require('fs')

http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-type' : 'application/json'
    })
  createReadStream('./movies.json').pipe(res)
   
}).listen(port)

console.log('Server is running at http://localhost:8084')