
const PersonService = require('../services/person.service')


// Get all person
exports.getAllperson = async function (req, res, next) {
    try {
        const persons = await PersonService.getAllPerson()
        return res.json(persons);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getOnePerson = async function (req, res, next) {
    try {        
        console.log('Req params', req.params);
        const persons = await PersonService.getOnePerson(req.params.id)
        return res.json(persons);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
// Get all person and return count
exports.getCountPerson = async function (req, res, next) {
    try {
        const persons = await PersonService.getAllPerson()
        return res.json(persons.length);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
// Get all person who vaccinated
exports.getVaccinatedPerson = async function (req, res, next) {
    try {
        const persons = await PersonService.getAllPerson()
        filteredPersons=persons.filter((person) => {
            //console.log(person.vaccine);
            return person.vaccine !==""
        })
        return res.json(filteredPersons);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
// get persons filter with params
// Get Persons with params
exports.getPersonsWithParams = async function (req, res) {
    try {        
        console.log('A query paraméterek', req.query);
        let persons = await PersonService.getFilterPerson(req.query) 
              
        return res.json(persons);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
