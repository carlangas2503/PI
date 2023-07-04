require('dotenv').config();
const { Sequelize } = require('sequelize');
const DogModel = require('./models/Dog')
const  TemperamentModel  = require('./models/Temperament')
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
  logging: false,
  native: false, 
})

DogModel(sequelize)
TemperamentModel(sequelize)
const { dog , temperament } = sequelize.models;
dog.belongsToMany(temperament,{ through: 'DogTemperament'})
temperament.belongsToMany(dog,{ through: 'DogTemperament'})

module.exports = {
  ...sequelize.models,
  conn: sequelize,     
};
