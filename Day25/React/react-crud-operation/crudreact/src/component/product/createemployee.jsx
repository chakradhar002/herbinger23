import React, { Component } from 'react'
import EmployeeService from '../../service/empservice';



class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2

            firstName: ''
          
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
       
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5

        EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
  
    
        }
    
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }


 
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                              
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                      
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                     
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
