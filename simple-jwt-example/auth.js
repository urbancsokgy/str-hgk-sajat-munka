require('dotenv').config()
const jwt = require ('jsonwebtoken')


// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      // const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearerHeader.split(' ')[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
     return  next();
    } else {
      // Forbidden
     return res.sendStatus(403);
    }  
  }
  

  module.exports=Object.freeze({
      verifyToken
    })