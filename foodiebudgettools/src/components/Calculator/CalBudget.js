import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import Char ,{updateChart} from "./chart";
// import Budget from "./budget.js"
import "./style.css";
import plusPic from "./icon/plus.png"
import editPic from "./icon/edit.png"
import trashPic from "./icon/trash.png"


function CalBudget() {
    const [tabNumber, setTabNumber] = useState(0)
    const [balance, setBalance] = useState(0)
    const [formData, setFormData] = useState({
        restaurantName: "",
        expense: "",
        incomeName: "",
        incomeAmount: ""
    })
    const [isEditing, setIsEditing] = useState(false)
    const [edtingIndex, setEditingIndex] = useState()
    const [restaurantExpenses, setRestaurantExpenses] = useState([])
    const [incomes, setIncomes] = useState([])
    const [oldAmount, setoldAmount] = useState()

    const onChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onAddRestaurantExpense = () => {
        let expenses = [...restaurantExpenses]
        let exp = +formData.expense //turns to a number
        setBalance(balance - exp)
        expenses.push({ restaurant: formData.restaurantName, expense: formData.expense })
        setRestaurantExpenses(expenses)
        setFormData({
            ...formData,
            restaurantName: "",
            expense: ""
        })
    }

    const onAddIncome = () => {
        let incomeArray = [...incomes]
        let inc = +formData.incomeAmount
        setBalance(balance + inc)
        incomeArray.push({ name: formData.incomeName, amount: formData.incomeAmount })
        setIncomes(incomeArray)
        setFormData({
            ...formData,
            incomeAmount: "",
            incomeName: ""
        })
    }
    const onDeleteRestaurant = (index) => {
        console.log("delete", index)
        let newRestaurant = [...restaurantExpenses]
        let expense = +newRestaurant[index].expense
        setBalance(balance + expense)
        newRestaurant.splice(index, 1)
        setRestaurantExpenses(newRestaurant)

    }

    const onDeleteteIncome = (index) => {
        console.log("delete", index)
        let newIncome = [...incomes]
        let income = +newIncome[index].amount
        setBalance(balance - income)
        newIncome.splice(index, 1)
        setIncomes(newIncome)
    }
    const onEditRestaurant = (index) => {
        setIsEditing(true)
        setEditingIndex(index)
        setFormData({
            ...formData,
            restaurantName: restaurantExpenses[index].restaurant,
            expense: restaurantExpenses[index].expense,
        })
        setoldAmount(+restaurantExpenses[index].expense)

    }
    const onEditIncome = (index)=> {
        setIsEditing(true)
        setEditingIndex(index)
        setFormData({
            ...formData,
            incomeName: incomes[index].name,
            incomeAmount: incomes[index].amount,
        })
        setoldAmount(+incomes[index].amount)


    }
    const onUpdateRestaurant = (index)=> {
        let newRestaurants = [...restaurantExpenses]
        newRestaurants[index].restaurant=formData.restaurantName
        newRestaurants[index].expense=formData.expense
        setRestaurantExpenses(newRestaurants)
        setBalance(balance + oldAmount- +formData.expense)
        setFormData({
            ...formData,
            restaurantName: "",
            expense: ""
        })
        setIsEditing(false)
    }
    const onUpdateIncome = (index)=> {
        let newIncome = [...incomes]
        newIncome[index].name=formData.incomeName
        newIncome[index].amount= formData.incomeAmount
        setIncomes(newIncome)
        setBalance(balance - oldAmount+ +formData.incomeAmount)
        setFormData({
            ...formData,
            incomeAmount: "",
            incomeName: ""
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
                        {
                            balance < 0 ? (
                                <>
                                    <small>-$</small>{Math.abs(balance)}
                                </>
                            ) : (
                                    <>
                                        <small>$</small>{balance}
                                    </>
                                )
                        }


                    </div>
                </div>
    
            </div>
            <div className="budget-dashboard">
                <div style={{ width: 460, margin: 'auto' }}>
                    <div className="dash-title">Dashboard</div>
                    <div className="toggle">
                        <div className={tabNumber === 0 ? "active tab1" : "tab1"} onClick={() => setTabNumber(0)}>Restaurant name</div>
                        <div className={tabNumber === 1 ? "active tab2" : "tab2"} onClick={() => setTabNumber(1)}>Income</div>
                        <div className={tabNumber === 2 ? "active tab3" : "tab3"} onClick={() => setTabNumber(2)}>All</div>
                    </div>
                    {
                        tabNumber === 0 ?
                            (
                                <div id="expense">
                                    <ul className="list">
                                        {
                                            restaurantExpenses.map((res, index) => (
                                                <li key={index} className="expense">
                                                    <div className="entry">{res.restaurant}: ${res.expense}</div>

                                                    <div onClick={()=>onEditRestaurant(index)}> < img src={editPic} /> </div>
                                                    <div onClick={() => onDeleteRestaurant(index)}> < img src={trashPic} /> </div>



                                                </li>
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
                                        {
                                            isEditing ? (
                                                <div className="add-income" onClick={()=>onUpdateRestaurant(edtingIndex)}>
                                                    <img src={plusPic} alt="" />
                                                </div>
                                            ) : (
                                                    <div className="add-income" onClick={onAddRestaurantExpense}>
                                                        <img src={plusPic} alt="" />
                                                    </div>
                                                )
                                        }

                                    </div>
                                </div>
                            ) : tabNumber === 1 ?
                                (
                                    <div id="income">
                                        <ul className="list">
                                            {
                                                incomes.map((income, index) => (
                                                    <li key={index}>
                                                        <div className="entry">{income.name}: ${income.amount}</div>
                                                        <div onClick= {()=>onEditIncome(index)}> < img src={editPic} /> </div>
        
                                                        <div onClick={() => onDeleteteIncome(index)}>  < img src={trashPic} /> </div>

                                                    </li>
                                                ))
                                            }
                                        </ul>
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
                                            {
                                                 isEditing ? (
                                                    <div className="add-expense" onClick={()=>onUpdateIncome(edtingIndex)}>
                                                        <img src={plusPic} alt="" />
                                                    </div>
                                                ) : (
                                                        <div className="add-expense" onClick={onAddIncome}>
                                                            <img src={plusPic} alt="" />
                                                        </div>
                                                    )
                                            }
                                          
                                        </div>
                                    </div>
                                ) : (
                                    <div id="all">
                                        <ul className="list">
                                            {
                                                incomes.map((income, index) => (
                                                    <li key={index}>
                                                        <div className="entry">{income.name}: ${income.amount}</div>
                                                    </li>
                                                ))
                                            }
                                            {
                                                restaurantExpenses.map((res, index) => (
                                                    <li key={index} className="expense">
                                                        <div className="entry">{res.restaurant}: ${res.expense}</div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )

                    }
                </div>
            </div>
        </div>



    );
}

export default CalBudget;
