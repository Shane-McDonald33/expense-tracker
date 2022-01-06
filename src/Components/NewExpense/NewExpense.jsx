import React, {useState} from "react";
import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false); //line 21 means that if you are not adding an expense the button will be shown, if you are the button will be gone
    const saveExpenseDataHandle = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return(
        <div className="new-expense">
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
           {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense