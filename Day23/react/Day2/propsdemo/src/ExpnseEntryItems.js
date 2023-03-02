import React from 'react';



class ExpenseEntryItem extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
      
        return (
           <div>
               <div><b>Item id :</b> <em>{this.props.item.id}</em></div>
                <div><b>Name:</b> <em>{this.props.item.name}</em></div>
                <div><b>amount:</b> <em>{this.props.item.amount}</em></div>
                <div><b>spendDate:</b> <em>{this.props.item.spendDate.toString()}</em></div>
                <div><b>amount:</b> <em>{this.props.item.category}</em></div>
           
           </div>

            
        )}
    
    }



export default ExpenseEntryItem;

