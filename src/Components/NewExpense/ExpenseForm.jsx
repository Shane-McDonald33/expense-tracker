import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleInputHandle = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event);
    }
    const amountInputHandle = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event);
    }
    const dateInputHandle = (event) => {
        setEnteredDate(event.target.handle);
        console.log(event);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'onChange={titleInputHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountInputHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateInputHandle}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;