import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[]=[]
  constructor(private http:HttpClient) { }

  //fetching all students
  // public getStudents(){
  //   return this.http.get("https://localhost:2025/getUsers")
  // }
  
  getStudents(){
    this.http.get("http://localhost:2025/getUsers")
    .subscribe(data=>{
      console.log(data);
      return Object.values(data);
    })
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
