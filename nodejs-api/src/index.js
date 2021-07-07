const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use(bodyParser.json())
app.use('/person', require('./controllers/person/routes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})