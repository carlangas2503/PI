const express = require('express')
const getAll = require('./controlers/getAll')
const getId = require('./controlers/getId')
const getName = require('./controlers/getName')
const postDogs = require('./controlers/postDog')
const getTemperaments = require('./controlers/getTemperaments')
const onlyDb = require('./controlers/getOnlyDb')
const onlyApi = require('./controlers/getOnlyApi')

const dogsRoute = express.Router()

dogsRoute.get('/all',getAll)
dogsRoute.get('/id/:id',getId)
dogsRoute.get('/name?',getName)
dogsRoute.get('/temperaments',getTemperaments)
dogsRoute.get('/onlyDb',onlyDb)
dogsRoute.get('/onlyApi',onlyApi)
dogsRoute.post('/',postDogs)


module.exports = dogsRoute
