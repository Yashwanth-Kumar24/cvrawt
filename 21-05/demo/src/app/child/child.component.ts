import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  constructor() { }
  empId!:any;
  empName!:string;
  isDisabled=false;
  color="red";
  i=0;

  ngOnInit(): void {
    
    this.empId="1259"
    this.empName="Yashwanth"
    
  }
  

  changecolor(){  
    this.color="rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";    
  }

  onSave(event:any){
    this.empName=event.target.value;
  }

}
