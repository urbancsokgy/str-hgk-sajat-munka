const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controllers')

// CRUD queries
// Create
router.post('/', UserController.postUser)
// Read
router.get('/', UserController.getAllUser)
router.get('/from=:from&limit=:limit', UserController.getUsers)
router.get('/:id', UserController.getOneUser)
// Update
router.patch('/:id',  UserController.patchUser)
// Delete
router.delete('/:id', UserController.deleteUser)






module.exports = router;