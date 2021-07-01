const { createReadStream } = require('fs')
const http = require('http')

http.createServer ((req, res) => {
    res.writeHead(200, {
        //'content-type': 'application/json'
        //'content-type': 'text/html'
    })
    
    createReadStream('./users.json', 'utf-8').pipe(res)
    
    
}).listen(8081)
console.log('server running in http://localhost:8080/');