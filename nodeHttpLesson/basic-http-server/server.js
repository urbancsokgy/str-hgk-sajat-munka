const http = require('http')
const port = 8080

http.createServer((req, res) =>{
    res.write('Hello node server')
    
    res.end()
}).listen(port)

console.log('Server is running at http://localhost:8080')