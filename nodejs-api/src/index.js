require('dotenv').config()
const config=require('config')
const express = require('express')
const mongoose = require('mongoose')
mongoose.Promise=global.Promise
const app = express()
const bodyParser = require ('body-parser')
const logger = require ('./config/logger')
const morgan = require ('morgan')

const port = process.env.PORT || 3000
// cluster password DiPqHPyh6k5MEfV9
// database connection
if(!config.has('database')){
  logger.error('NO database config found')
  process.exit()
}
const {username, password, host } = config.get('database') 

mongoose
//mongodb+srv://urbancsokgy:<password>@cluster0.xxaol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
.connect(`mongodb+srv://${username}:${password}@${host}`, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => logger.info("MongoDB connection has been established successfully"))
.catch(err => {
logger.error(err);
process.exit();
});



app.use(morgan('combined', {stream: logger.stream}))
//app.use('/images',express.static('./src/images'))
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.use((err, req, res, next)  => {
    
    res.status(err.statusCode)
    res.json({
        hasError: true,
        message: err.message,
        mymessage: "Something wrong"
    })
    //res.end(res.body)
}
    )
app.use(bodyParser.json())
app.use('/person', require('./controllers/person/person.routes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})