import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


// demo of Structural Directives: Structural directives start with a * sign. 
// These directives are used to manipulate and change the structure of the DOM elements. 
// For example, *ngIf and *ngFor.
export class AppComponent  {
  
  

  isLogIn : boolean = true;    // this is my variable
  isLogOut : boolean = false; 

// demo for ngfor 
friendslist = [
  {
    name: 'Nishant',
    age: 25
  },
  
  {
    name: 'Mayank',
    age: 45
  },
  {
    name: 'Raju',
    age: 74
  }
]

//ng switch demo
selectedValue: string= "One";  


//ng style demo

AddButtonCSSStyles() {

  
  let CssStyles = {        
      'color':'red',
      'font-weight': 'bold',
      'font-size.px': 20
  };
  return CssStyles;
}

// another demo
students: any[] = [
  {
      Name: 'Preety', Branch: 'CSE', Gender: 'Female'
  },
  {
      Name: 'Anurag', Branch: 'ETC', Gender: 'Male'
  },
  {
      Name: 'Priyanka', Branch: 'CSE',  Gender: 'Female'
  },
  {
      Name: 'Hina', Branch: 'ETC', Gender: 'Female'
  },
  {
      Name: 'Sambit', Branch: 'CSE', Gender: 'Male'
  }
]; 


// demo of property biniding string  interpolation

title = "Data binding using Property Binding";      

//demo of property binding

isDisabled= true;


///event binding demo

clickCount=0;
  clickMe() {
    this.clickCount++;
    console.log(" number of times cliked"+this.clickCount)
  }

///demo on pipe

title1 = 'my-first-app';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
 
//forms









}
