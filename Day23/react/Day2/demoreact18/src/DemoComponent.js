import React, { Component } from "react";

class DemoComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    const { name, age, email, salary } = this.props; // this assinged values
    return (
      <div>
        <table>
          <tr>
            <td>Name is : {name}</td>
          </tr>
          <tr>
            <td>Age is : {age}</td>
          </tr>
          <tr>
            <td>Email is : {email}</td>
          </tr>
          <tr>
            <td>Salary is : {salary}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DemoComponent;