
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
// Create a new Person
exports.postPerson=async (req, res, next)=>{
    const {  firstName, lastName, vaccine } = req.body;
    if ( !firstName || !lastName  ) {
       try {            
            throw new Error('Error while create new Person. Missing data!')
       } catch (e) {
            console.error(e.name + ': ' + e.message)
          }
       return {}     
    }
    const LastPerson = await PersonService.getFilterPerson({sortBy: 'id', order: 'desc', from: 1, limit: 1})
    // console.log('Qperson id', LastPerson[0].id)
    let  newPerson = {
         id :(LastPerson[0].id+1), 
         firstName, 
         lastName,
         vaccine 
    }
    // console.log(newPerson);
    try {
        const Person= await PersonService.postPerson(newPerson)
        return res.json(Person);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
//-----------------------------
// Update person
exports.putPerson = async function (req, res, next) {
    try {
        // console.log('Ez az id az update-re: ', req.params.id);
        // console.log('req.body: ', req.body);
        
        const { vaccine } = req.body;
        if (!vaccine) {
            try {            
                throw new Error('Error while update person!')
           } catch (e) {
                console.error(e.name + ': ' + e.message)
              }
            return {}
        }
            const update = {
                vaccine: vaccine
            };
        // id change _id
        const person=  await PersonService.getOnePerson(req.params.id)
        const _id=person._id
        // console.log('_ID from id= ',_id);
        //-------------------
        const  putPerson=await PersonService.putPerson(_id, update)
        return res.json(putPerson)           
        }  
        catch (e) {
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
// Delete person
// Delete one person by id
exports.deletePerson = async function (req, res, next) {
    try {
        console.log('Ez az id a törlésre: ', req.params.id);
        // id change _id
        const person=  await PersonService.getOnePerson(req.params.id)
        const _id=person._id
        console.log('_ID from id= ',_id);
        //-------------------
        await PersonService.deletePerson(_id)
        return res.json(person);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
//--------------------------
// Delete one persons by vaccine
exports.delVaccinatedPersons = async function (req, res, next) {
    try {
        console.log('Ez a vaccine param: ', req.params.vaccine);
        vaccineType={vaccine: req.params.vaccine }
        await PersonService.delVaccinatedPersons(vaccineType)
        return res.json({'Deleted persons': true});
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
//--------------------------