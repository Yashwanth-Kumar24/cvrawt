import { HttpClient } from '@angular/common/http';
import { TagContentType, ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getEmp():Observable<emp[]>{
    return this.http.get<emp[]>("http://localhost:3000/emp")
  }

  public addEmp(emp:emp):Observable<any>{
    const headers={"content-type":"application/json"}
    const body=JSON.stringify(emp)
    return this.http.post("http://localhost:3000/emp",body,{"headers":headers})
  }

  public updateEmp(emp:emp):Observable<any>{
    const headers={"content-type":"application/json"}
    const body=JSON.stringify(emp)
    return this.http.put("http://localhost:3000/emp/e101",body,{"headers":headers})
  }

}
