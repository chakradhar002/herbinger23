import React, { Component } from "react";
import { render } from "react-dom";
import ChildComponent from "./ChildComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employee: {
        empCode: "119",
        name: "Test employee",
        age: "25",
        email: "abc@abc.com",
        location: "Hyderabad"
      }
    };
  }

  render() {
    return (
      <div>
        /* Used employee as props name */
        <ChildComponent employee={this.state.employee} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));