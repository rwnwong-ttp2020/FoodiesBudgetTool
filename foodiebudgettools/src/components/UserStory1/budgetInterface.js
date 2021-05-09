// this page created by Jian and Rose 03/15/21

import React, {useState}from "react";
import "./budegetInterface.css";
import CalBudget from "../Calculator/CalBudget";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function BudgetInterface () {
    // let [times,setTimes]= useState(0);
    // let [calTool,setAmount] = useState({
    //     "inputBudget":0 , 
    //     "inputPrice": 0
    // });
    // function handleChange(event){
    //     const {name,value} = event.target;
    //     setAmount((preV)=>{
    //         return {...preV, [name]:value};
    //     });
    // }
    // function submitBtn(event) {
    //     setTimes (()=>{
    //         return parseInt(calTool.inputBudget)/parseInt(calTool.inputPrice);
    //     });
    //     console.log(times);
    //     event.preventDefault();
    //   }
    /*function calculatorLink(){
        ReactDOM.render(<CalBudget/>, document.getElementById('root'));
    }*/
    function submitBtn(event){
        let userBudeget = document.getElementById("inputBudget").value;
        let tier = document.getElementById("tier").value;
        let result= Math.floor(userBudeget/tier);
        document.getElementById("result").innerHTML="you can eat out "+result+" times per month";
        event.preventDefault();
    }
    return (
        <div id="eatingOut">
            <form>
                <label>
                    Enter your monthly eating out budget
                </label>
                <input type="text" id="inputBudget" name="inputBudget"/>
                <br/>
                <label>
                    Choose your restaurant tier 
                </label>
                <select name="tier" id="tier">
                    <option value="15">Budget Friendly - $15/per person</option>
                    <option value="40">Moderately Priced - $40/person</option>
                    <option value="75">Fine Dining - $75/per person</option>
                </select>
                {/* <input type="text" id="inputPrice" name="inputPrice" value={calTool.restaurantTier} onChange={handleChange}/> */}
            <br/>
            <button onClick = {submitBtn}>click to see result</button>
            <h1 id="result">0</h1>
                <label>
                    Go to budget tool to track your budget
                </label>
                <Link to='/calculate' className='navbar-logo'><button >Budget Tool</button></Link>   
                 

            </form>
        </div>
    )
}

export default BudgetInterface;
