import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsdemo-reative';

    //reative forms
  contactForm =  new FormGroup({

    firstname : new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
    
  })


  //user defined function

  onSubmit(){
    console.log(this.contactForm.value);

  }





}
