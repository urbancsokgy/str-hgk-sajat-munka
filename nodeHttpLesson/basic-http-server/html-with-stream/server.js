const http = require('http')
const movies = require('./movies')
const port = 8080
const {readFileSync, createReadStream} = require('fs')

http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-type' : 'application/json'
    })
  res.end(JSON.stringify(movies))
   
}).listen(port)

console.log('Server is running at http://localhost:8080')