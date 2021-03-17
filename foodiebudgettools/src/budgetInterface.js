// this page created by Jian and Rose 03/15/21

import React, {useState}from "react";
//the code have been completed changed! 
//I used the useState to keep track the user input about the budget and resPrice.
//plase meeting me if you need a explain with the code--> the code can not be explain clearly in just comment. ---- jian Lin
function BudgetInterface () {
    let [times,setTimes]= useState(0);
    let [calTool,setAmount] = useState({
        "inputBudget":0 , 
        "inputPrice": 0
    });
    function handleChange(event){
        const {name,value} = event.target;
        setAmount((preV)=>{
            return {...preV, [name]:value};
        });
    }
    function submitBtn(event) {
        setTimes (()=>{
            return parseInt(calTool.inputBudget)/parseInt(calTool.inputPrice);
        });
        console.log(times);
        event.preventDefault();
      }
    return (
        <div>
            <form>
                <label>
                    Enter your monthly eating out budget
                </label>
                <input type="text" id="inputBudget" name="inputBudget" value={calTool.budgetAmount} onChange={handleChange}/>
                <br/>
                <label>
                    Choose your restaurant price category
                </label>
                <input type="text" id="inputPrice" name="inputPrice" value={calTool.restaurantTier} onChange={handleChange}/>
            <br/>
            <button onClick = {submitBtn}>click to see result</button>
            <h1>{times}</h1>
            </form>
        </div>
    )
}

export default BudgetInterface;
