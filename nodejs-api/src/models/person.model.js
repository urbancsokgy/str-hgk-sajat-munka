const mongoose =require('mongoose')

const PersonSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    email : String
},{
    timeStamps : true,    
})

module.exports =mongoose.model('Person', PersonSchema)