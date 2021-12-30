import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Skin Care Routine',
      amount: 202.39,
      date: new Date(2021, 11, 29),
    },
    {
      id: 'e2',
      title: 'Phone Bill',
      amount: '45.35',
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
      date: new Date(2021, 10, 24)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;