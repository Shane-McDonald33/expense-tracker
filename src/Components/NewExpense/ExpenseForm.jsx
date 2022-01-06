import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmaount: '',
    //     enteredDate: '',
    // })
    const titleInputHandle = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput, // must do this so the values for the other states (amount and date) don't get lost
        //     enterTitle: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value} //this is the proper function call to use when merging state changes into one instead of multiple states. Must use this for the other single state fucntions that are called in the below statements
        // })
    }
    const amountInputHandle = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        //console.log(event);
    }
    const dateInputHandle = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        //console.log(event);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseInputData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseInputData);
        setEnteredTitle(''); // must also enter value={value of state} in the input field in order to two-way bind these and clear input fields for the UI
        setEnteredAmount('');// must also enter value={value of state} in the input field in order to two-way bind these and clear input fields for the UI
        setEnteredDate('');// must also enter value={value of state} in the input field in order to two-way bind these and clear input fields for the UI
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleInputHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountInputHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateInputHandle}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;