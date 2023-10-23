const express = require('express');
require('dotenv').config();
const connDB = require('./config/db')

const Person = require('./model/Person');

const app = express();

connDB();

const addPerson = async() => {
    try {
        const person = new Person({name: '', age: 0, favoriteFoods: '', vegan: false})
        await person.save()
        console.log(person)
    } catch (error) {
        console.log(error)
    }
}

// addPerson();

const getPersons = async() => {
    try {
        const persons = await Person.find({})
        console.log(persons)
    } catch (error) {
        console.log(error)
    }
}

// getPersons();

const getVeganPersons = async() => {
    try {
        const vegans = await Person.find({vegan: true})
        console.log(vegans)
    } catch (error) {
        console.log(error)
    }
}

// getVeganPersons();

const getPersonsByFood = async() => {
    try {
        const person = await Person.findOne({favoriteFoods: 'Pizza'})
        console.log(person)
    } catch (error) {
        console.log(error)
    }
}

getPersonsByFood();

const getPersonById = async() => {
    try {
        const person = await Person.findById({_id: '6536ac833f7c768f6608177b'})
        console.log(person)
    } catch (error) {
        console.log(error)
    }
}

// getPersonById();

const updatePerson = async() => {
    try {
        await Person.findByIdAndUpdate({_id: '6536ac833f7c768f6608177b'}, {age : 36})
    } catch (error) {
        console.log(error)
    }
}

// updatePerson();

const deletePerson = async() => {
    try {
        await Person.deleteOne({_id: '6536ac833f7c768f6608177b'})
    } catch (error) {
        console.log(error)
    }
}

// deletePerson();


const PORT = process.env.PORT || 4050;

app.listen(PORT, (err)=> 
err ? console.log(err) :
console.log(`server is running on ${PORT}`)
)