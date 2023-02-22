import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform-signUp';

    contactForms = new FormGroup({
    firstname : new FormControl(),
    // lastname : new FormControl(),
    email : new FormControl(),
    password : new FormControl()
  });

  onSubmit(){
    console.log(this.contactForms.value);
  }
}
