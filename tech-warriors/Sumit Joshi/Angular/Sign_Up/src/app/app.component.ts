import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sign_Up';

    //reative forms
  contactForm =  new FormGroup({

    fullname : new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    
  })

  //user defined function

  onSubmit(){
    console.log(this.contactForm.value);

  }
}
