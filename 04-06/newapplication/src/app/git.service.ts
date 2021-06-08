import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { }

  getRepos(user:String):Observable<Repos[]>
  {
      return this.http.get<Repos[]>("http://api.github.com/users/"+user+"/repos")
  }
}

