require('dotenv').config()
const database = require('./database')
const express = require('express');
const mongoose = require('mongoose')
const {model, Schema}= require('mongoose')

const app = express();

// Kapcsolódás az adatbázishoz
database.connect

// Schema létrehozása
const DepartmentSchema = new Schema({
    name : String,
    location : String
})
const Department = model('department', DepartmentSchema)
//----------------------
const EmployeeSchema = new Schema({
    firstname : String,
    lastname : String,
    mobile : String,
    department : {type: Schema.Types.ObjectId, ref: 'department'}
})
const Employee = model('employee', EmployeeSchema)
//---------------------------------------
const CompanySchema = new Schema({
    name : String,
    address : String,    
    employees : [{type: Schema.Types.ObjectId, ref: 'employee'}]
})
const Company = model('company', CompanySchema)
// End of Schemas---------------------------------------

app.use('/',async (req, res, next) => {
    await Department.deleteMany({})
    await Department.create({name: 'IT Department', location: 'Building A'})
    await Department.create({name: 'Marketing Department', location: 'Building B'})
    await Employee.deleteMany({})
    await Employee.create({
        firstname : 'Viktor',
        lastname : 'Kjartarsson',
        mobile : '123456',
        department : await Department.findOne({name: 'IT Department'})
    })
    await Employee.create({
        firstname : 'Marija',
        lastname : 'Holnemvolt',
        mobile : '456987',
        department : await Department.findOne({name: 'Marketing Department'})
    })
    await Company.deleteMany({})

    await Company.create({
        name : 'BigComapy',
        address: 'Nevada, Running street 5.',
        employees: await Employee.find({department : await Department.findOne({name: 'Marketing Department'})})
    })
    await Company.create({
        name : 'SmallCompany',
        address: 'Bimingham, Walking street 5.',
        employees: await Employee.find({department : await Department.findOne({name: 'IT Department'})})
    })
 
    
    res.json({
        Lekérdezés : await Employee.find({department : await Department.findOne({name: 'Marketing Department'})} ),
        departments : await Department.find(),
        employees : await Employee.find(),
        employeesWithDepartments: await Employee.find().populate('department', ['name', 'location']),
        company : await Company.find().populate({
            path: 'employees',
            model: 'employee',
            populate : {
                path: 'department',
                model: 'department',  
            }
        })
    })
    next(
        
        console.log()
    )
})
app.listen(process.env.PORT, () => {
    process.stdout.write(`Listening on port: ${process.env.PORT}`)
})