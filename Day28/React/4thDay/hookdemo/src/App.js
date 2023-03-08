
import React, { useState } from "react";

//const [state, setState] = useState(initialstate)

function App(props) {
 //We can also pass a function as an argument if 
 //the initial state has to be computed. 
 //And the value returned by the function
 // will be used as the initial state.
  const [count, setRandomCount] =
    useState(function generateRandomInteger() {
      let dum =  Math.floor(Math.random() * 100);
      console.log("---1---"+dum);
      return dum;

    });

  //handler
  function clickHandler(e) {
    let dum =  Math.floor(Math.random() * 100);
      console.log("---2-----"+dum);
    setRandomCount(dum)
  }

  return (

    <div style={{ margin: 'auto', width: 100, display: 'block' }}>
      <h1> {count} </h1>

      <p>
        <button onClick={clickHandler}> Click </button>
      </p>

    </div>


  )
}







export default App