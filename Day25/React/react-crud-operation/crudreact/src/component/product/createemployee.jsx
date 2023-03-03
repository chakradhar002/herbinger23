
import { Component, ReactDOM } from "react";
import EmployeeService from '../../service/empservice'

class CreateEmployeeComponent extends Component {
   //step 1
   constructor(props) {
      super(props)
      this.state = {
         firstName: ''

      }

      //step 3// this handlderr is called by constructor
      this.changeFirstNameEventHanlder = this.changeFirstNameEventHanlder.bind(this);
      //step 2
      changeFirstNameEventHanlder = (event) => {
         this.setState({ firstName: event.target.value }) //empty values

      }
      //step 4

      CreateEmployeeDetails = (e) => {
         e.preventDefault();
         //step5 //create object containes emp info like firstname
         let employee = {
            // setep 6
            firstName: this.state.firstName
         }
         //step 7// before step 7 pls construct a serice class and its method
         EmployeeService.createEmployeeServcie(employee).then(
            res => {
               this.props.history.push('/employee')
            }
         )
      };


   }
   render() {
      return (


         <div>
            <div className="card-body">
               <div className="form-group">
               <label>First Name   </label>
               <input className="form-control"
                      name="fisrtName"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHanlder}
                      
                      
                      />
               </div>
            </div>
         </div>


      )




   }













