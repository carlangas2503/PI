const axios = require('axios')

async function onlyApi(req,res) {
    const {API_KEY} = process.env
    try {
        const apiResponse = await axios('https://api.thedogapi.com/v1/breeds/',{
            headers: {
                'x-api-key': API_KEY
            }
        })
        return res.status(200).json(apiResponse.data)
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
module.exports = onlyApi