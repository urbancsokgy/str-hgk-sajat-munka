const http = require('http')
// const router =require ('./router')

const server = http.createServer((req, res) => {
    /*
    Request:
      URL pl http://localhost:8080/<path>
      METHOD pl GET, POST, DELETE, PATCH, PUT
      QUERY PARAMÉTEREK pl http://localhost:8080/<path>?isInStock=1&priceLessThan=10000
      BODY
      HEADER pl "content-type: application/json, authorization: {token}"
    Response:
      HEADER
      BODY
      STATUS pl 200
  */
    res.setHeader("content-type", "text/html; charset=utf-8");
    res.writeHead(200);
    const router = {
        '/'             :  '<h1>Címlap</h1><a href="/bejelentkezes">Bejelentkezés</a>',
        '/bejelentkezes': '<h1>Bejelentkezés</h1><a href="/">Címlap</a>'   ,
        '/404': '<h2>404</h2><h1>Bejelentkezés</h1><a href="/">Címlap</a>'   
    }

    
    const kiir = (res)=>{
        res.end('huha')
    }
    console.log(router[req.url])
    console.log('')
    //router[req.url]
    router[req.url]
    ?    res.end(router[req.url])
    :    res.end(router['/404'])


}).listen(8080)