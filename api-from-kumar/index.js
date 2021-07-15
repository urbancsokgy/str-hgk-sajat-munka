// Install dotenv and import
require('dotenv').config()
const database = require('./database')
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

// const mongoose = require('mongoose');
const app = express();
const bodyParser = require ('body-parser')
app.use(express.json());
app.use(bodyParser.json())

//Public files and maps
app.use(express.static('public'));


app.listen(process.env.port || 3001, function(){
    console.log(`now listening for requests in http://127.0.0.1:${process.env.PORT}`);
 });

database.connect
const swaggerDocument = YAML.load('./docs/openapi.yaml')

app.use('/swagger',  swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/user.routes'));
app.use


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
