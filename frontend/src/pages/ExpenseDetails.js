import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <div>
                
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                Total subscription amount
                <span className="income-amount">₹{incomeAmt}</span>
                
                
            </div>
        </div>
    )
}

export default ExpenseDetails