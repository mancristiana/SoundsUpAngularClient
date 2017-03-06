import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";
import { User } from "./user";

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello</h1>
      <ul class="heroes">
        <li *ngFor="let user of users">
          <span class="badge">{{user.id}}</span>
          <span>{{user.firstName}}</span>
           <span>{{user.lastName}}</span>
           <span>{{user.email}}</span>
          
        </li>
      </ul>
  
  `,
})
export class AppComponent implements OnInit {
  users: User[];
  constructor(private userService : AppService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() : void {
    this.userService
      .getUsers()
      .then(users => {
        return this.users = users;
      });
  }

}
