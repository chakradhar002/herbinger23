import React from 'react';

export default class Propsdemo extends React.Component{

    //constructor Propsdemo(props:any):Propsdemo

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Heading Class</h1>
                </div>
                <div>
                    <b>ID:</b><em>{this.props.item.id}</em>
                </div>
                <div>
                    <b>Item:</b><em>{this.props.item.name}</em>
                </div>
                <div>
                    <b>Amount:</b><em>{this.props.item.amount}</em>
                </div>
                <div>
                    <b>Spend Date:</b><em>{this.props.item.Spend_date.toString()}</em>
                </div>
                <div>
                    <b>Categoey:</b><em>{this.props.item.Category}</em>
                </div>
            </div>
        )
    }
}