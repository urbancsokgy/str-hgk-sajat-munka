require('dotenv').config()
const mongoose = require('mongoose');
 const Connection_String =
 "mongodb+srv://urbancsokgy:DiPqHPyh6k5MEfV9@cluster0.xxaol.mongodb.net/chats?retryWrites=true&w=majority";
const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true
};
const connectionCallback = () => {
 console.log("Connection OK");
};
exports.connect= mongoose.connect(Connection_String, options, connectionCallback);
mongoose.Promise = global.Promise;

