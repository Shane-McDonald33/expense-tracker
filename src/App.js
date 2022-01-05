import React, { useState } from 'react'
import Expenses from "./Components/ExpenseData/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Skin Care Routine',
    amount: 202.39,
    date: new Date(2021, 11, 29),
  },
  {
    id: 'e2',
    title: 'Phone Bill',
    amount: 45.35,
    date: new Date(2021, 9, 10),
  },
  {
    id: 'e3',
    title: 'Monitor',
    amount: 369.32,
    date: new Date(2021, 9, 13),
  },
  {
    id: 'e4',
    title: 'Shoes',
    amount: 78.47,
    date: new Date(2021, 10, 24),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
      
    </div>
  );
}

export default App;