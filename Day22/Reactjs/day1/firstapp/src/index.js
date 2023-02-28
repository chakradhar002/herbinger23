import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpenseEntryItem from './product/addproduct/ExpenseEntryItem ';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode is a tool for highlighting
  // potential problems in an application. 
//  Like Fragment , StrictMode 
  // does not render any visible UI. 
  //It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <ExpenseEntryItem />
 
  </React.StrictMode>
);

