var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const personSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    vaccine: {
        type: String,
        default: ""
    }  

});
//schema.set(collection, 'actor');
const Person = mongoose.model('Person', personSchema, 'persons')

Person.createCollection().then(function(collection) {
    collection.name='persons'
    console.log('Collection is created!');
    console.log('Collection name!', collection.name);

  });
//   Person.create({id:11,firstName:"Dorey",lastName:"Weekly",vaccine:"Pfizer"}, function(err, doc) {
//     // At this point the jobs collection is created.
// });

module.exports = Person;