import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templetedrivenformdemo';


 //user info
  user = {
    firstName: 'John',
    password:  'test'
};

   //list of counrties for dropdown
  countryList: country[] =[
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')

  ];

     //function
  onSubmitUserInfo(user: any) {
    console.log(user);
}



}

class country{

id:string ;
name:string ; 

constructor(id:string, name:string) {
  this.id=id;
  this.name=name;
}


}
