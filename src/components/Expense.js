import React from 'react';
import "./Expense.css";

const Expense = (props) => {
  const month=props.items[0].date.toLocaleString('en-US',{month:"long"});
  const day=props.items[0].date.toLocaleString('en-US',{day: '2-digit'});
  const year=props.items[0].date.getFullYear();
  
  return (
    <div className='expense-container'>
        <div className='expense-date'>
            <div>{month}</div>
            <div>{year}</div>
            <div className='expense-date__day'>{day}</div>
            
        </div>
        <h1 className='expense-title'>{props.items[1].title}</h1>
        <div className='expense-price'>
          {props.items[0].amount}
        </div>
    </div>
  )
}

export default Expense;