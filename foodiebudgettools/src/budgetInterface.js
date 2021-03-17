// this page created by Jian and Rose 03/15/21

import React from "react";
import Budget from "budget.js"; //this imports the function computeFrequency in budget.js
function budgetInterface () {
    return (
        <div>
            <form>
                <label>
                    Enter your monthly eating out budget
                </label>
                <input type="text" id="inputBudget" name="inputBudget" placeholder="Enter your monthly eating out budget"/>
                <br/>
                <label>
                    Choose your restaurant price category
                </label>
                <select name="restaurantCategory" id="restaurantCategory">
                    <option value="60">Fine Dining</option>
                    <option value="45">Mid Range</option>
                    <option value="15">Budget Friendly</option>
                </select>
            <br/>
            <button onClick = {Budget()}>Submit</button>
            </form>
        </div>
    )
}

export default budgetInterface;