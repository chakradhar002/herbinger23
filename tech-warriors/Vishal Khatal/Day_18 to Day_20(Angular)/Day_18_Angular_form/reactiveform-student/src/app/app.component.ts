import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//input from form we are taken
export class AppComponent {
  title = 'reactiveform-student';

  studentForms = new FormGroup({
    name : new FormControl(),
    date : new FormControl(),
    gender : new FormControl(),
    class : new FormControl(),
    city : new FormControl()
  });

  onSubmit(){
    console.log(this.studentForms.value);
  }
}
