import { Component } from '@angular/core';
import { GitService } from './git.service';
import { Repos } from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newapplication';

  userName!:String

  repos:Repos[]=[]

  constructor(private gitService:GitService){ }

  public getRepos(){
    this.gitService.getRepos(this.userName)
    .subscribe(data=>{
      this.repos=data
    },
    (error)=>{
      console.log("Error occured")
    })
  }
}
