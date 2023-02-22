import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TempletDrivenForm';


  //user info

  user = {
    fullname : String,
    password : 'Cristiano'
  }


  countryList : country[]=[
    new country("1","India"),
    new country("2","Portugal"),
    new country("3","Argentina"),
    new country("4","Quatar")
  ]

//function
  onSubmitUserInfo(user:any){
    console.log(user);
    
  }
}

class country{
  id:string ;
  name:string;

  constructor(id:string,name:string){
    this.id = id;
    this.name = name;
  }


}