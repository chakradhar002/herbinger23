import React from 'react';
import ReactDOM from 'react-dom';
import produt from './product.css'



class ExpenseEntryItem extends React.Component{
    constructor(props)
    super(props);
    this.state ={
        
    };
    
    render() {

 
      return (
         <div>
           <div><b>Item:</b><em>Mongo Juice</em></div>
           <div><b>Amount:</b><em>30.00</em></div> 
           <div><b>Spend Date:</b><em>{this.props.spend_date.toString()}</em></div>
           <div><b>Food:</b><em>Food</em></div>

         </div>
      );
   }
}
export default ExpenseEntryItem;