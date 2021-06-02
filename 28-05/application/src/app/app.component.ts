import { createViewChild } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';

  
  input!:Student

  roll!:number
  branch!:String
  name!:String
  email!:String

  showMe!:boolean
  constructor(private studentService:StudentService){
    
  }

  students!:any
  
  getStudents(){
    this.students=this.studentService.getStudents();
  }


  addStudent(){
    // this.input=new Student(8,"Jack","CSE","..");
    // this.studentService.addStudent(this.input)
    //this.student=studnet
    this.studentService.addStudent({"rollno":this.roll,"name":this.name,"branch":this.branch,"emailId":this.email})
  }

  deleteStudent(num:any){
    this.studentService.deleteStudent(num);
  }
}
