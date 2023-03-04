import React, { Component } from "react";
import { EmployeeDataService } from "./service/emlployeeservice";

 export default class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firsname: ""
    }
    this.saveEmplolyee = this.saveEmplolyee.bind(this);

  }// constructor closed


 

  // calling service class from here
  saveEmplolyee() {
    const employee = {
      firsname: this.state.firsname  

  }
}

 

EmployeeDataService.


}










}







