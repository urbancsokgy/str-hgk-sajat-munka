const express = require('express')
const data = require('./data')

const controller = express.Router()
// Get all person
controller.get('/', (req, res)=>{
    res.json(data)
})
// Create new person
controller.post('/', (req, res) => {
    const newPerson=req.body
    newPerson.id=data[data.length-1].id+1
    data.push(newPerson)
    res.status(201)
    res.json(newPerson)
})
// Update person
controller.put('/:id', (req, res) => {
    const id=req.params.id
    let updatePerson = req.body
    const index = data.findIndex(item=>item.id===Number(id))
    data[index]={...data[index], ...updatePerson}
    res.status(200)
    res.json(data[index])
})
// Get one
controller.get('/:id', (req, res) => {
    const person=data.find(item => item.id === Number(req.params.id))
    res.json(person)
})
// Delete one
controller.delete('/:id', (req, res) => {
    const index = data.findIndex(item=>item.id===Number(id))
    data.splice(index, 1)
    res.json({})
})

module.exports=controller