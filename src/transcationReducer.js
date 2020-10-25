const TranscationReducer = ((state, action) => {
    switch(action.type){
        case "ADD_TRNAS":
            return{   
              ...state,  
          Transcations:  [action.payloads, ...state]
            }
        
        case 'DELETE_TRANSCATION':
            return {
                ...state,
                Transcations: state.Transcations.filter(Transcation => Transcation.id !== action.payloads)
            }
 default:
     return state
    };
})
export default TranscationReducer;