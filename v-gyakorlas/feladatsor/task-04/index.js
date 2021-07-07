const { update, get, remove, getList } = require('./utils');
const http = require('http')

const port =8080

const server = http.createServer( async(req, res)=>{
//res.writeHead(200,  {"Content-Type" : "text/plain; charset=UTF-8"});
res.writeHead(200,  {"Content-Type" : "application/json; charset=UTF-8"});
data=await getList()
//console.log('huh',data)
//res.end(JSON.stringify(data, null, 4))
res.write(JSON.stringify(data, null, 4))

})
server.listen(port, (err) => {    
    console.log(`A szerver fut a http://localhost:${port} porton`);
});



// (async () => {
//     console.log('Elem lekérése', await get(1));
    
//     await remove(2)
//     console.log('Az egyes index update',await update(
//         {
//             id: 5,
//             model: 'Suzuki',
//             maker: 'Skoda',
//             year: 2005,
//             color: 'orange',
//             price: 22277
//           }
//     ));
// })();