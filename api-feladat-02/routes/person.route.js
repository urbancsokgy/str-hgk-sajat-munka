const express = require('express');
const router = express.Router();

const PersonController = require('../contorller/person.controller')


router.get('/', PersonController.getAllperson)
router.get('/filter', PersonController.getPersonsWithParams)
router.get('/count', PersonController.getCountPerson)
router.get('/vaccinated', PersonController.getVaccinatedPerson)
router.get('/:id', PersonController.getOnePerson)

module.exports = router;