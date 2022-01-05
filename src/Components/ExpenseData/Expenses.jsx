import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react'


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHanlder = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  
const filteredExpenses = props.expenses.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
})
  
    return (
      <div>
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHanlder} /> 
      {filteredExpenses.map((expense) => ( <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))}
      </Card>
      </div>
    )
}

export default Expenses;