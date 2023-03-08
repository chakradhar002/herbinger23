import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
         
            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
          
        </div>

      </Router>
    </div>

  );
}

export default App;
