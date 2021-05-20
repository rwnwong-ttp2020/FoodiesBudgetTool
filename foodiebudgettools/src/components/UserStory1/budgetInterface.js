// this page created by Jian and Rose 03/15/21

import React,{useState} from "react";
import "./budegetInterface.css";
import { Link } from 'react-router-dom';

function BudgetInterface () {
    let [calResult,setCalResult] = useState("");
    function submitBtn(event){
        let userBudeget = document.getElementById("inputBudget").value;
        let tier = document.getElementById("tier").value;
        let result= Math.floor(userBudeget/tier);
        setCalResult("you can eat out "+result+" times per month");
        event.preventDefault();
    }
    return (
        <div id="eatingOut">
            <form>
            <div id="mainContent">
                <label for="inputEmail">Enter your monthly eating out budget</label><br/>
                <input type="text" id="inputBudget" name="inputBudget"/>
            </div>
            <div>
                <label>
                    Choose your restaurant tier:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </label>
                <select name="tier" id="tier">
                    <option value="15">Budget Friendly - $15/per person</option>
                    <option value="40">Moderately Priced - $40/person</option>
                    <option value="75">Fine Dining - $75/per person</option>
                </select>
            </div>
            <br/>
            <button onClick = {submitBtn}>click to see result</button>
            <h2 id="result">{calResult}</h2>
                <label>
                    Go to budget tool to <Link to='/calculate' className='navbar-logo'><br/>
                    <button>track your budget</button></Link>
                </label>
                {/* <Link to='/calculate' className='navbar-logo'>
                    <button >Budget Tool</button>
                </Link>   */}
            </form>
        </div>
    )
}

export default BudgetInterface;
