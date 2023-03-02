import React from 'react';
import ReactDOM from 'react-dom';
import ExpenseEntryItem from './ExpnseEntryItems';

const item = {
  id: 1, 
  name : "mango", 
  amount : 30.5, 
  spendDate: new Date("2020-10-10"), 
  category: "fruit" 
}


ReactDOM.render(
  <React.StrictMode>
  <ExpenseEntryItem item= {item} />
  </React.StrictMode>,
  document.getElementById('root')
);