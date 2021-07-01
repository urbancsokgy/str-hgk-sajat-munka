const express = require('express')
const path = require('path')
const app = express()

 
app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname,'valami.txt'))

})
app.post('/post', function (req, res) {
    console.log('post end');

  res.send('post methodd')
  res.end(() => {
      console.log('post end');
  })
})

 
app.listen(3000)