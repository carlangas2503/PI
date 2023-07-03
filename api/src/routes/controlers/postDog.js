const { dog, temperament} = require('../../db')
const getTemperaments = require('./getTemperaments')


async function postDogs(req,res) {
    try {
        const {Imagen,Nombre,Altura_min,Altura_max,Peso_min,Peso_max,Años_de_vida,Desde_DB,Temperamento} = req.body;
        if(Imagen && Nombre && Altura_min && Altura_max && Peso_min && Peso_max && Años_de_vida && Temperamento){
           const newDog = await dog.create({
            Imagen,
            Nombre,
            Altura_min:Number(Altura_min),
            Altura_max:Number(Altura_max),
            Peso_min:Number(Peso_min),
            Peso_max:Number(Peso_max),
            Años_de_vida,
            Desde_DB,
            })
            Temperamento.map(async ele =>{
                const findTemp = await temperament.findAll({where:{Nombre:ele}})
                if(!findTemp) return 'hubo un error'
                newDog.addTemperament(findTemp)
            })
            return res.send(newDog)
        } else {
            res.status(404).send('Hubo un fallo con los datos')
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = postDogs;