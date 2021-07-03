const http = require ('http')
const fsp = require ('fs').promises
const path = require("path")

const routerUrl= require('./router/router')
const getFile= require('./utils/util')


const port = 8080
const server =  http.createServer( async (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html', 'utf-8');

    let   myPath = path.join(__dirname, 'views', routerUrl(req.url))
    let fileWrite= await getFile(myPath)
    res.end(fileWrite)


}).listen(port, () => {
    console.log(`A szerver elindult a http://localhost:${port} címen.`);
})