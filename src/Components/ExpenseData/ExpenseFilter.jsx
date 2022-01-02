

import './ExpenseFilter.css';

const ExpensesFilter = (props) => { // the props is attached to the props attacthed to this component via the Expenses compoent "onChangeFilter"
   const dropDownChangeHandler = (event) => { // listened by the select form in the html
    props.onChangeFilter(event.target.value) // prop assigned in Expenses.jsx
   }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value= {props.selected} onChange={dropDownChangeHandler}> 
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;