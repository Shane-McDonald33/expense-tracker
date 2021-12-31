import Expenses from "./Components/ExpenseData/Expenses";

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
      <div>
        <Expenses expenses={expenses}/>
      </div>
    </div>
  );
}

export default App;