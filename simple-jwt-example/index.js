require('dotenv').config()
const {verifyToken} = require ('./auth')
const express = require ('express')
const jwt = require ('jsonwebtoken')
const bodyParser = require ('body-parser')
const app=express()
app.use(express.json());
app.use(bodyParser.json())

app.put("/api/logout", function (req, res) {
    const authHeader = req.headers["authorization"];
    jwt.sign(authHeader, process.env.privatekey, { expiresIn: 1 } , (logout, err) => {
    if (logout) {
    res.send({msg : 'You have been Logged Out' });
    } else {
    res.send({msg:'Error'});
    }
    });
    });


app.get('/api',verifyToken, (req, res, next) => {
    jwt.verify(req.token, process.env.privatekey,function(err, authData) {
        if(err){
            console.log(err);
            res.sendStatus(403)
        }else{
            var decoded = jwt.decode(req.token, { complete: true });
            console.log('Decode header and payload',decoded.header);
            console.log('Decode header and payload',decoded.payload)
            res.json({ ...req.query, message: 'OK', ...authData })

        }
      });     
})
app.post('/post', (req, res, next) => {
    res.json({message: 'post created'})
})
app.post('/login', (req, res) => {
     // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({username: "admin",  pwd: "piroska"}, process.env.privatekey, { expiresIn: '10m' }, (err, token) => {
    res.json({
      token
    });
  });
});


app.listen(3000, ()=>{
    console.log(`A program fut a http://127.0.0.1:3000 címen`);
})
