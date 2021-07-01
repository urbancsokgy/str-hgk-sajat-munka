const { createReadStream } = require('fs')
const http = require('http')

http.createServer ((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    switch()
    
    
}).listen(8080)
console.log('server running in http://localhost:8080/');