import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormRecord } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'InputRegistrationForm';

  registrationForm = new FormGroup({

    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    phone : new FormControl(),
    job : new FormControl(),
    desc : new FormControl()

  })

onsubmit(){
  console.log(this.registrationForm.value);
  console.log(this.registrationForm.controls['email'].value)
  //this.registrationForm.
}

}
