import React, { Component } from "react";

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
 
    };
  }

  render() {
    // Used employee props
    const { employee } = this.props;
    return (
      <div>
        <table>
          <tr>
            <td>Employee Code : {employee.empCode}</td>
          </tr>
          <tr>
            <td>Employee Name : {employee.name}</td>
          </tr>
          <tr>
            <td>Employee Age : {employee.age}</td>
          </tr>
          <tr>
            <td>Employee Email : {employee.email}</td>
          </tr>
          <tr>
            <td>Employee Location : {employee.location}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ChildComponent;