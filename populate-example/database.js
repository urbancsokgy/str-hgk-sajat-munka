require('dotenv').config()
const mongoose = require('mongoose');
 const Connection_String =
 "mongodb+srv://urbancsokgy:DiPqHPyh6k5MEfV9@cluster0.xxaol.mongodb.net/populate?retryWrites=true&w=majority";
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true
};
const connectionCallback = () => {
 console.log("Connection OK");
};
exports.connect= mongoose.connect(Connection_String, options, connectionCallback);
// list all Collections
mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        console.log(names); // [{ name: 'dbname.myCollection' }]
        module.exports.Collection = names;
    });
})
//------------------------------------------
mongoose.Promise = global.Promise;

