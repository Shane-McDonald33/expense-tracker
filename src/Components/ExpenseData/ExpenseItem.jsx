import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); //useState returns an arrary, the first value being the value itself and the second being the updated value 
    console.log('expense item is evaluated by react') 
    console.log(props)
    const handleClick = () => {
        setTitle('');
        console.log(props.title)
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem