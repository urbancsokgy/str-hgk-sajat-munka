
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: [true, 'Roll field is required']
    },
    present: {
        type: Boolean,
        deafult: true
    }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;