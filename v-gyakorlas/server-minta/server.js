const fsp = require('fs').promises;
const path = require('path')
const http = require('http')
const {logger, dispDate} = require('./utils/log')
const getHtmlContent =require('./router/router')


const port = 8080

const server = http.createServer(async (req, res) => {
	//res.writeHead(200,  {"Content-Type" : "text/plain; charset=UTF-8"});
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let content= "Page not found"    
    try {
        content= await getHtmlContent(__dirname, req.url)     
    } catch (error) {
        res.statusCode =404
    }
    //console.log(content);
    res.end(content)
    logger(req, res)
  
})
server.listen(port, (err) => {
    
    console.log(`A szerver fut a http://localhost:${port} porton:\n${dispDate()}`);
})