const { dog,temperament } = require('../../db')
const axios = require('axios')


async function getName(req,res) {
    try {
        const { API_KEY } = process.env
        const { name } = req.query
        const dogNameDb = await dog.findOne({ where:{Nombre:name},
            include: temperament
         })
        if(dogNameDb){
            return res.status(200).json({
                id:dogNameDb.ID,
                image:{
                    url:dogNameDb.Imagen
                },
                name:dogNameDb.Nombre,
                height:{
                    metric:dogNameDb.Altura_min===dogNameDb.Altura_max?dogNameDb.Altura_max:`${dogNameDb.Altura_min} - ${dogNameDb.Altura_max}`
                },
                weight:{
                    metric:dogNameDb.Peso_min===dogNameDb.Peso_max?dogNameDb.Altura_max:`${dogNameDb.Peso_min} - ${dogNameDb.Peso_max}`
                },
                temperament:dogNameDb.temperaments.map(ele=>ele.Nombre).join(', '),
                life_span:`${dogNameDb.Años_de_vida} years`,
                fromDb:dogNameDb.Desde_DB
            })
        }
        if(!dogNameDb){
            const Dogs = await axios('https://api.thedogapi.com/v1/breeds/',{
                headers: {
                    'x-api-key':API_KEY
                }
            })
            const dogNameApi = Dogs.data.find(ele=>ele.name.toLowerCase() == name.toLowerCase())
            if(dogNameApi){
                return res.status(200).json(dogNameApi)
            }
            return res.status(400).send('no existe un perrito con este nombre')
        }
    } catch (error) {
        return res.status(400).send(error.message)
    }

}
module.exports = getName;