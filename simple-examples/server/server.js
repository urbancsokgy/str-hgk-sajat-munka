const { createReadStream } = require('fs')
const http = require('http')

http.createServer ((req, res) => {
    res.writeHead(200, {
        //'content-type': 'application/json'
        //'content-type': 'text/html'
    })
    let myData=''
    const readable = createReadStream('./users.json', 'utf-8')
    readable.on('data', (chunk) => {
        // console.log(chunk)
        // console.log(chunk.length)
        //console.log(toString(chunk))
        myData += (chunk)
    })
    readable.on('end', () => {
        console.log(typeof myData);
        let ize = JSON.stringify(JSON.parse( myData).data)
        let ize1 = ize.toString().split(",").join(",\n")
        console.log( ize1);
        res.write((ize1))
        // console.log(JSON.parse( myData).data);        
        res.end()
    })
    readable.on('close', ()=>{})
    
}).listen(8080)
console.log('server running in http://localhost:8080/');