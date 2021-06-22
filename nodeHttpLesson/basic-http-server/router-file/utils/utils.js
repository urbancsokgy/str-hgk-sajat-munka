const {createReadStream} = require('fs')
const {join} = require('path')

const htmlResponse = (res, file, statusCode=200 )=>{
    res.writeHead(statusCode, {'content-type': 'text/html'})
    
    createReadStream(join(__dirname, `../views/${file}.html`)).pipe(res)
    //createReadStream('../views/index.html').pipe(res)
}
module.exports = htmlResponse