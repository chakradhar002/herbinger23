import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatedrivenformdemo';

  countryList: country[]=[
    new country("1","Latvia"),
    new country("2","Spain"),
    new country("3","Chili"),


  ];

  onSubmitUserInfo = (value : any) => {
    console.log(value)
 }
}

class country{
  id:string;
  name:string;

  constructor(id:string,name:string){
    this.id=id;
    this.name=name;
  }
}

