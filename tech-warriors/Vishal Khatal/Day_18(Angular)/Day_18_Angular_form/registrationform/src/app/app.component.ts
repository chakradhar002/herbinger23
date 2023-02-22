import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'regeistrationfrom';

    loginform = new FormGroup({
    firstName : new FormControl(),
    lastName : new FormControl(),
    email : new FormControl(),
    phone : new FormControl(),
    job : new FormControl(),
    desc : new FormControl(),
  })
  onsubmit()
  {
    console.log(this.loginform.controls['firstName'].value);
  }
}
