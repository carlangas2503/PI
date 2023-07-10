const { dog , temperament} = require('../../db')

async function onlyDb(req,res) {
    const dogsDb = await dog.findAll({include: temperament})
    const arr = []
    try {
        if(dogsDb){
            dogsDb.map(({ID,Nombre,Altura_max,Altura_min,Peso_max,Peso_min,Años_de_vida,temperaments,Imagen})=>{
                const guardar = {}
                guardar.id = ID
                guardar.name = Nombre
                guardar.weight = {}
                guardar.weight.metric = Altura_max > Altura_min?`${Altura_min} - ${Altura_max}`:`${Altura_max}`
                guardar.height = {}
                guardar.height.metric = Peso_max > Peso_min?`${Peso_min} - ${Peso_max}`:`${Peso_max}`
                guardar.life_span = `${Años_de_vida} years`
                guardar.temperament = temperaments.map(ele=>ele.Nombre).join(', ')
                guardar.image = {}
                guardar.image.url = Imagen
                arr.push(guardar)
            })
            return res.status(200).json(arr)
        }
        return res.status(400).json('No hay perritos guardados')
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}
module.exports = onlyDb