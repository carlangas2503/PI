const axios = require('axios')
const { temperament } = require('../../db')

const getTemperaments = async(req,res)=>{
    try {
        const API_KEY = process.env
        const apiResponse = await axios('https://api.thedogapi.com/v1/breeds/',{
            headers: {
                'x-api-key': API_KEY
            }
        })
        let temps = apiResponse.data.map(data => data.temperament? data.temperament:null)
        .map(dog => dog?.split(', ')).flat();

        temps.forEach(ele => {
            if(ele){
                temperament.findOrCreate({where:{Nombre: ele }})
            }
        });

        temps = await temperament.findAll()

        res.status(200).send(temps)
    
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = getTemperaments;