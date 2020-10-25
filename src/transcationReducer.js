const TranscationReducer = ((state, action) => {
    switch(action.type){
        case "ADD_TRNAS":{
            return   [action.payloads, ...state]
        }
        
 default:
     return state
    }
})
export default TranscationReducer;