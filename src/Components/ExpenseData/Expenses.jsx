import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
import ExpensesList from './ExpensesList';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHanlder = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  
const filteredExpenses = props.expenses.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});
  
    return (
      <div>
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHanlder} />
      <ExpensesList expenses={filteredExpenses}/> 
      </Card>
      </div>
    )
}

export default Expenses;