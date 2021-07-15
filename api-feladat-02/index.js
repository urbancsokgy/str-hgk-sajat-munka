// Install dotenv and import
require('dotenv').config()
const express = require('express');
const app = express();
const database = require('./database')
const bodyParser = require ('body-parser')
app.use(express.json());
database.connect

app.get('/', (req, res, next) => {
    const out={
        'Query params': req.query,        
    }
    res.json(out)
})

app.use('/persons', require('./routes/person.route'))

//Public files and maps
app.use(express.static('public'));
app.listen(process.env.port || 3001, function(){
    console.log(`now listening for requests in http://127.0.0.1:${process.env.PORT}`);
 });






 

 // Hibakezelés vagy nem?
app.get((err, req, res, next) => {
    if (res.statusCode == 404) {
        process.stdout(res.statusCode)
        res.status(err.statusCode)
        const currentError = res.json({
            hasError: true,
            message: err.message,
            mymessage: "Something wrong"
        })
        next(
            res.body = currentError,
            process.stdout(currentError)
        )
    }
}
)