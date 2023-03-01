import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import FirstFile from './FirstFile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //StrictMode is a tool for highlighting potential problems in an application. 
  //Like Fragment , StrictMode does not render any visible UI. 
  //It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <FirstFile></FirstFile>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
