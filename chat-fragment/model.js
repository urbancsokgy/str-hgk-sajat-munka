const mongoose =require('mongoose')

const messageSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    },
    time : {
        type : Date,
        default : Date.now
    },
})

module.exports = mongoose.model('Post', messageSchema)