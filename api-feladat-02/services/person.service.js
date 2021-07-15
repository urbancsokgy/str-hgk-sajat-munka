const Person = require('../model/person.schema')

const myFilter = (persons, filterBy, filterValue) => {
    if (filterValue != null) {
        return persons.filter(item => {
            // console.log(item[filterBy], '?=?', filterValue, (item[filterBy] == filterValue));
            // console.log(item[filterBy] == filterValue)
            return item[filterBy] == filterValue
        }
        )
    } else return persons
}

exports.getAllPerson = async function () {
    try {
        const person = await Person.find()
        return person
    } catch (e) {
        // Log Errors
        throw Error('Error while get all Person')
    }
}
exports.getOnePerson = async function (id) {
    try {
        console.log('id from controller', id)
        const person = await Person.findOne({id: id})
        return person
    } catch (e) {
        // Log Errors
        throw Error('Error while get all Person')
    }
}
// Create
exports.postPerson = async function (newPerson) {
    try {
        const person = new Person(newPerson)
        // console.log('newPerson in service: ', newPerson);
        // console.log('Person in service: ', person);
        return await person.save()
    } catch (e) {
        // Log Errors
        throw Error('Error while create new Person')
    }
}
//---------------------------------------
// Delete person
exports.deletePerson = async function (_id) {
    try {
        const person = await Person.findByIdAndDelete(_id)
        return {}
    } catch (e) {
        // Log Errors
        throw Error('Error while delete one user')
    }
}
//----------------------------
// Delete persons with vaccine
exports.delVaccinatedPersons = async function (vaccineType) {
    try {
        const person = await Person.deleteMany(vaccineType)
        return {}
    } catch (e) {
        // Log Errors
        throw Error('Error while delete one user')
    }
}
//----------------------------
exports.putPerson = async function (id, updatePerson) {
    try {
        return await Person.findByIdAndUpdate(id, updatePerson, {new : true})
    } catch (e) {
        // Log Errors
        throw Error('Error while update person')
    }
}


exports.getFilterPerson = async function (params) {
    try {
        console.log('Paraméterek: ', params);        
        const persons = await Person.find()
        //filter by value
        const filterBy = (Reflect.ownKeys(persons[0].toJSON()).includes(params.filterBy)) ? params.filterBy : 'id'
        const filterValue = params.filterValue ? params.filterValue : null
        console.log('Filterby: ', filterBy, ' Filtervalue: ', filterValue);
        console.log(typeof persons)
        
        let filteredPersons = myFilter(persons, filterBy, filterValue)
        console.log(filteredPersons.length)

        // A kezdőérték ellenőrzése
        let from = (params.from) ? parseInt(params.from) : 1
        if (from > filteredPersons.length || from < 1) { from = 1 }

        // A limit ellenőrzése
        let limit = params.limit ? parseInt(params.limit) : filteredPersons.length
        if ((limit < 1)) { limit = filteredPersons.length }
        if ((from + limit) > (filteredPersons.length + 1)) { limit = filteredPersons.length + 1 - from }

        console.log('From:', from, 'Limit: ', limit);
        // A rendezés szempontjának ellenőrzése az objektum kulcsaiban
        const sortBy = (Reflect.ownKeys(filteredPersons[0].toJSON()).includes(params.sortBy)) ? params.sortBy : 'id'
        // A rendezés ellenőrzése
        const order = (!params.order || (params.order !== 'desc')) ? 'asc' : params.order
        console.log('SortBy:', sortBy, ' Order:', order);
        
        // return asc or desc        
        if (order == 'asc') {
            return filteredPersons.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1).splice(from - 1, limit)
        } else if (order == 'desc') {
            return filteredPersons.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1).splice(from - 1, limit)
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while get filtered Person')
    }
}