import React from 'react';
import ReactDOM from 'react-dom/client';



function ListOfCar(props) {
  return <li>lis of cars {props.brand}</li>;
}

function CarShow() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
<form>
<label>Enter your name:
        <input type="text" />
      </label>
        <h1 style={{color: "red"}}> list of car</h1>
      <ul>
        {cars.map((car) => <ListOfCar brand={car} />)}
      </ul>
      </form>
    </div>
   
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarShow />);