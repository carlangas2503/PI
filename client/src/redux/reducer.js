
const initialState = {
    temperamentos:[],
    details:{}
}

const rootReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'GET_TEMPERAMENTS_LIST':
            return{
                ...state,
                temperamentos:action.payload
            }
        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }
        case 'DELETE_DETAILS':
            return{
                ...state,
                details: {}
            }
        default:
            return {state}
    }

}

export default rootReducer;