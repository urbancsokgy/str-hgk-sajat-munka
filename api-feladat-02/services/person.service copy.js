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

exports.getFilterPerson = async function (params) {
    try {
        console.log('Paraméterek: ', params);
        const persons = await Person.find()
        // A kezdőérték ellenőrzése
        let from = (params.from) ? parseInt(params.from) : 1
        if (from > persons.length || from < 1) { from = 1 }

        // A limit ellenőrzése
        let limit = params.limit ? parseInt(params.limit) : 5
        if ((limit < 1)) { limit = persons.length }
        if ((from + limit) > (persons.length + 1)) { limit = persons.length + 1 - from }

        console.log('From:', from, 'Limit: ', limit);
        // A rendezés szempontjának ellenőrzése az objektum kulcsaiban
        const sortBy = (Reflect.ownKeys(persons[0].toJSON()).includes(params.sortBy)) ? params.sortBy : 'id'
        // A rendezés ellenőrzése
        const order = (!params.order || (params.order !== 'desc')) ? 'asc' : params.order
        console.log('SortBy:', sortBy, ' Order:', order);
        //filter by value
        const filterBy = (Reflect.ownKeys(persons[0].toJSON()).includes(params.filterBy)) ? params.filterBy : 'id'
        const filterValue = params.filterValue ? params.filterValue : null
        console.log('Filterby: ', filterBy, ' Filtervalue: ', filterValue);
        console.log(typeof persons)
       
        let filteredPersons = myFilter(persons, filterBy, filterValue)
        console.log(filteredPersons.length)

        // return asc or desc        
        if (order == 'asc') {
            return filteredPersons.splice(from - 1, limit).sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
        } else if (order == 'desc') {
            return filteredPersons.splice(from - 1, limit).sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1)
        }
    } catch (e) {
        // Log Errors
        throw Error('Error while get filtered Person')
    }
}