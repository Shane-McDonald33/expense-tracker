import './ExpenseItem.css'

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>
                12/29/2021
            </div>
            <div className='expense-item__description'>
                <h2>Skin Care Routine</h2>
                <div className='expense-item__price'>
                    $202.39
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem