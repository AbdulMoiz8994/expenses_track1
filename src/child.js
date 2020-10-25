import React, { useContext, useState } from 'react';
import TranscationsContext from './TranscationsContext.js';

function Child() {

    let { Transcations, addTranscation} = useContext(TranscationsContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    console.log(newDesc,newAmount)
    const handleAddition = (event) => {
        if(Number(newAmount) === 0){
            alert("Please enter correct value");
            return false;
        }
        event.preventDefault();
        addTranscation({
            amount: Number(newAmount),
            desc: newDesc
        });

     setDesc("");
     setAmount(0);


    }

    const getIncome=() => {
        let income =0;
        for(var i=0; i<Transcations.length;i++){
            if(Transcations[i].amount >0)
                income = income + Transcations[i].amount     
            
        }
        return income;
    }
    const getExpense=() =>{
        let expense=0;
        for(var i=0; i<Transcations.length;i++){
            if(Transcations[i].amount <0)
                expense += Transcations[i].amount
                
        }
        return expense;
    }

    return (
        
        <div className="container">
            <h1 className="text-center">Expense Track</h1>

    <h3>YOUR BALANCE <br /> ${getIncome() + getExpense()}</h3>

            <div className="expense-container">

    <h3>INCOME <br />${getIncome()}</h3>
    <h3>EXPENSE <br />${getExpense()}</h3>
            </div>
            <h3>History</h3>
            <hr />
            
            <ul className="trans-list">
                {Transcations.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}
            </ul>
            
            <h3>Add new transcation</h3>
            <hr />
            <form className="transcation-from" onSubmit={handleAddition}>
                <label>
                    Enter Description<br />
                    <input type="text" 
                    value={newDesc}
                    onChange={(ev) => setDesc(ev.target.value)} placeholder="Enter name here"></input>
                </label>
                <h4>Amounts,<br /><span>negative and Positive expenses,Income</span></h4>
                <label>
                    <input type="number" 
                    value={newAmount}
                    onChange={(ev) => setAmount(ev.target.value)} placeholder="Enter number"></input>
                </label>
                <br /><br />
                <input type="submit" value="Add Transaction"></input>
            </form>
        </div>
    );
}
export default Child;
