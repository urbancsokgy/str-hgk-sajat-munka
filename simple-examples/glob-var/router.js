// Router
const http =require ('http')
const router ={
    '/' : function(){return res.end('<h1>Címlap</h1><a href="/bejelentkezes">Bejelentkezés</a>')}

}
// switch (true) {
//     case req.url === "/" && req.method === "GET":
//       res.setHeader("content-type", "text/html; charset=utf-8");
//       res.writeHead(200);

//       break;
//     case req.url === "/bejelentkezes" && req.method === "GET":
//       res.setHeader("content-type", "text/html; charset=utf-8");
//       res.writeHead(200);
//       res.end('<h1>Bejelentkezés</h1><a href="/">Címlap</a>');

//       break;
//     default:
//       res.setHeader("content-type", "text/html; charset=utf-8");
//       res.writeHead(200);
//       res.end('<h1>Oldal nem található</h1><a href="/">Vissza</a>');
//   }
module.exports=router