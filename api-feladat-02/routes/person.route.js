const express = require('express');
const router = express.Router();

const PersonController = require('../contorller/person.controller')


router.get('/', PersonController.getAllperson)
router.post('/', PersonController.postPerson)
router.put('/:id', PersonController.putPerson)
router.delete('/:id', PersonController.deletePerson)
router.delete('/del/:vaccine', PersonController.delVaccinatedPersons)
router.get('/filter', PersonController.getPersonsWithParams)
router.get('/count', PersonController.getCountPerson)
router.get('/vaccinated', PersonController.getVaccinatedPerson)
router.get('/:id', PersonController.getOnePerson)

module.exports = router;