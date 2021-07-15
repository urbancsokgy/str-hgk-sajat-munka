require('dotenv').config()
const mongoose = require('mongoose');
 const Connection_String =
 "mongodb://localhost:27017/apifeladat";
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true
};
const connectionCallback = () => {
 console.log("Connection OK");
};
exports.connect= mongoose.connect(Connection_String, options, connectionCallback);
mongoose.Promise = global.Promise;

