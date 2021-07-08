const Person = require('../../models/person.model')

exports.create = (personData) => {
    const person = new Person(personData)
    return person.save()
}
exports.findAll = () => {
    return Person.find()
}
exports.findOne = (id) => {
    return Person.findById(id)
}
exports.update = (id, updateData) => {
    return Person.findByIdAndUpdate(id, updateData, {new : true})
}
exports.delete = (id) => {
    return Person.findByIdAndRemove(id)
}

