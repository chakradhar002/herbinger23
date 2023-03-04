import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
             
                <div className="container">
                    <Switch> 
                          
                       
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                         
                        
                    </Switch>
                </div>
            
        </Router>
    </div>
    
  );
}

export default App;
