const axios = require('axios')
const { dog , temperament} = require('../../db')
async function getId(req,res){
    try {
        const { API_KEY } = process.env
        const id = req.params.id
        if(id.length < 7){
            const Dogs = await axios('https://api.thedogapi.com/v1/breeds/',{
                headers: {
                    'x-api-key':API_KEY
                }
            })
            const dogApi = Dogs.data.find(ele=>ele.id == id)
            if(dogApi){
                return res.status(200).json({
                    id:dogApi.id,
                    image:dogApi.image.url,
                    name:dogApi.name,
                    height:dogApi.height.metric,
                    weight:dogApi.weight.metric,
                    temperament:dogApi.temperament,
                    life_span:dogApi.life_span
                })
            }
            return res.status(400).send('no hay perritos con este id')
        }else{
            const dogDb = await dog.findByPk(id,{
                include: temperament
            })
            if(dogDb){
                return res.json({
                id:dogDb.ID,
                image:dogDb.Imagen,
                name:dogDb.Nombre,
                height:dogDb.Altura_min===dogDb.Altura_max?dogDb.Altura_max:`${dogDb.Altura_min} - ${dogDb.Altura_max}`,
                weight:dogDb.Peso_min===dogDb.Peso_max?dogDb.Peso_max:`${dogDb.Peso_min} - ${dogDb.Peso_max}`,
                life_span:`${dogDb.Años_de_vida} years`,
                temperament:dogDb.temperaments.map(ele=>ele.Nombre).join(', ')
            })
            }
            return res.status(400).send('no hay perritos con este id')
        }
        
        
    } catch (error) {
        
    }
}
// const name = [
//     {
//         nombre:'carlos'
//     },{
//         nombre:'andres'
//     }
// ]
// console.log(name.map(ele=>ele.nombre).join(''));
module.exports = getId

// ID.id
// Imagen.image
// Nombre.name
// Altura.height.metric
// Peso.weight.metric 
// Temperamentos.temperament
// Años de vida.life_span