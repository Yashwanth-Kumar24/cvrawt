import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[]=[
    {"rollno":1,"name":"Raj","branch":"IT","emailId":"raj@cvr.in"},
    {"rollno":2,"name":"Ram","branch":"CSE","emailId":"ram@cvr.in"},
    {"rollno":3,"name":"Sam","branch":"IT","emailId":"sam@cvr.in"},
    {"rollno":4,"name":"Rose","branch":"ECE","emailId":"rose@cvr.in"},
    {"rollno":5,"name":"Rajiv","branch":"IT","emailId":"rajiv@cvr.in"},
    {"rollno":6,"name":"Yash","branch":"EIE","emailId":"yash@cvr.in"},
  ]
  constructor() { }

  //fetching all students
  public getStudents(){
    return this.students;
  }

  //Adding new student
  public addStudent(input:Student){
      this.students.push(input)
  }

  //Delete student at idx
  public deleteStudent(id:any){
    this.students.splice(id,1)
  }

}
