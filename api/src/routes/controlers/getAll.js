const axios = require('axios')
async function getAll(req,res) {
    try {
        const {API_KEY} = process.env
        const apiResponse = await axios('https://api.thedogapi.com/v1/breeds/',{
            headers: {
                'x-api-key': API_KEY
            }
        })
        res.status(200).json(apiResponse.data)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = getAll;