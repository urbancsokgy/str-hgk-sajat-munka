const http = require('http')
const port = 8080
const {readFileSync} = require('fs')

http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-type' : 'text/html'
    })
    const html= readFileSync('./index.html', 'utf-8')
   
    
    res.end(html)
}).listen(port)

console.log('Server is running at http://localhost:8080')