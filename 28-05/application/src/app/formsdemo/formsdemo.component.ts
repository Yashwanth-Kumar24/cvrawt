import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formsdemo',
  templateUrl: './formsdemo.component.html',
  styleUrls: ['./formsdemo.component.css']
})
export class FormsdemoComponent implements OnInit {


  loginForm=new FormGroup({
      username:new FormControl(),
      password:new FormControl()
  })


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.loginForm.value)
  }

  // onSubmit(cform:any)
  // {
  //   console.log(cform.value)
  //   console.log("break")
  //   console.log(cform.dirty)// returns true if any field is modified on opening else false
  //   console.log("break")
  //   console.log(cform.touched)// returns true if any field is touched/focused on opening else false
    
  // }
}
