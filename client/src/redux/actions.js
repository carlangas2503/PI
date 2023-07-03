import axios from "axios";

export function getDogs(id) {
    return async function (dispatch) {
        try {
            var json = await axios(`http://localhost:3001/dogsRoutes/id/${id}`)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function deleteDetails() {
    return async function (dispatch){
    return dispatch({
        type: 'DELETE_DETAILS'
    })
}
}
export function getTemperamentos(){
    return async function (dispatch){
        const respondeServer = await axios('http://localhost:3001/dogsRoutes/temperaments');
        const listTemp = respondeServer.data.map(ele => ele.Nombre)
        return dispatch({
            type:'GET_TEMPERAMENTS_LIST',
            payload:listTemp
        })
    }
}