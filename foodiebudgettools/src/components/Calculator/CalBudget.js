import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Char ,{updateChart} from "./chart";
// import Budget from "./budget.js";
import "./style.css";
import plusPic from "./icon/plus.png"

function CalBudget() {
    const [tabNumber, setTabNumber] = useState(0)

    const [formData, setFormData] = useState({
        restaurantName: "",
        expense: "",
        incomeName: "",
        incomeAmount: ""
    })

    const [restaurantExpenses, setRestaurantExpenses] = useState([])

    const onChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onAddRestaurantExpense = () => {
        let expenses = [...restaurantExpenses]
        expenses.push({ restaurant: formData.restaurantName, expense: formData.expense })
        setRestaurantExpenses(expenses)
        setFormData({
            ...formData,
            restaurantName: "",
            expense: ""
        })
    }

    return (
        <div className="budget-container">
            <div class="app-title">
                <a href="">Foodies<b>Group</b></a>
            </div>
            <div className="budget-header">
                <div className="balance">
                    <div className="title">
                        Balance
                </div>
                    <div className="value">
                        <small>$</small>0
                </div>
                </div>
                <div className="account">
                    <div className="income">
                        <div className="title">
                            Income
                    </div>
                        <div className="income-total">
                            <small>$</small>0
                    </div>
                    </div>
                    <div className="chart"></div>
                    <div className="outcome">
                        <div className="title">
                            Income
                    </div>
                        <div className="outcome-total">
                            <small>$</small>0
                    </div>
                    </div>
                </div>
            </div>
            <div className="budget-dashboard">
                <div className="dash-title">Dashboard</div>
                <div className="toggle">
                    <div className={tabNumber === 0 ? "active tab1" : "tab1"} onClick={() => setTabNumber(0)}>Restaurant name</div>
                    <div className={tabNumber === 1 ? "active tab2" : "tab2"} onClick={() => setTabNumber(1)}>Income</div>
                    <div className={tabNumber === 2 ? "active tab3" : "tab3"} onClick={() => setTabNumber(2)}>All</div>
                </div>
                {
                    tabNumber === 0 ?
                        (
                            <div id="income">
                                <ul className="list">
                                    {
                                        restaurantExpenses.map((res, index) => (
                                            <li key={index}>{res.restaurant} {res.expense}</li>
                                        ))
                                    }
                                </ul>
                                <div className="input">
                                    <input type="text"
                                        id="income-title-input"
                                        name="restaurantName"
                                        value={formData.restaurantName}
                                        placeholder="Title"
                                        onChange={onChange} />
                                    <input
                                        type="number"
                                        id="income-amount-input"
                                        name="expense"
                                        value={formData.expense}
                                        placeholder="$0"
                                        onChange={onChange} />
                                    <div className="add-income" onClick={onAddRestaurantExpense}>
                                        <img src={plusPic} alt="" />
                                    </div>
                                </div>
                            </div>
                        ) : tabNumber === 1 ?
                            (
                                <div id="expense">
                                    <ul className="list"></ul>
                                    <div className="input">
                                        <input
                                            type="text"
                                            id="expense-title-input"
                                            name="incomeName"
                                            value={formData.incomeName}
                                            placeholder="Title"
                                            onChange={onChange} />
                                        <input
                                            type="number"
                                            id="expense-amount-input"
                                            name="incomeAmount"
                                            value={formData.incomeAmount}
                                            placeholder="$0"
                                            onChange={onChange} />
                                        <div className="add-expense" onClick={onAddRestaurantExpense}>
                                            <img src={plusPic} alt="" />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div id="all">
                                    <ul className="list">
                                        {
                                            restaurantExpenses.map((res, index) => (
                                                <li key={index}>{res.restaurant} {res.expense}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )

                }

            </div>
        </div>



    );
}

export default CalBudget;
