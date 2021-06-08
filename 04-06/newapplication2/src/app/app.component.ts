import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { emp } from './emp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapplication2';

  constructor(private api:ApiService){}
  emp:emp[]=[]

  Emp=new emp()
  
  getEmployee(){
    this.api.getEmp().subscribe(data=>{
        this.emp=data;
    })
  }

  addEmployee(){
    this.api.addEmp(this.Emp)
    .subscribe(data=>{
      console.log(data)
    })
  }
}
