import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform-employee';

  employeeForms = new FormGroup({
    firstname : new FormControl(),
    lastname : new FormControl(),
    birthdayDate : new FormControl(),
    gender : new FormControl(),
    emailAddress : new FormControl(),
    phoneNumber : new FormControl()

  });

  onSubmit(){
    console.log(this.employeeForms.value);
  }
}
