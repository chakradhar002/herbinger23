import React, { Component } from "react";
import { render } from "react-dom";

import DemoComponent from "./DemoComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };

    
  }

  render() {
    return (
      <div>
        <DemoComponent
          name={"Test"}
          age={25}
          email={"test@test.com"}
          salary={66.5}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));