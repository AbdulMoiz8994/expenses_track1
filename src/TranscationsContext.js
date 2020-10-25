// eslint-disable-next-line
import React,{createContext,useReducer} from 'react';
import TranscationReducer from './transcationReducer.js';


const initialTrans=[
    {amount: 520, desc:"Cash"},
    {amount: -50, desc:"Book"},
    {amount: -220, desc:"Camera"},
    {amount: -20, desc:"Cold Drink"}
]

// const initialTrans={
//   transcation: []
// };

 const TranscationsContext=createContext(initialTrans);

 export default TranscationsContext;

 export const TrnascationProvider = ({children}) =>{
   let [state, dispatch]= useReducer(TranscationReducer, initialTrans)

   function addTranscation (transObj) {
          dispatch({
              type: "ADD_TRNAS",
              payloads: {
              desc: transObj.desc, 
              amount: transObj.amount
            },
          })
   }
//    function delTransaction(id){
//     dispatch({
//         type: "DELETE_TRANSACTION",
//         payload: id
//     });
// }
   
   return(
       <TranscationsContext.Provider value={{
           Transcations: state,
           addTranscation,  
        }}>
            {children}
     </TranscationsContext.Provider>
       
   )
 }