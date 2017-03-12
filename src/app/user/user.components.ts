/**
 * Created by mancr on 3/12/2017.
 */
import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'user-list',
  template: `
      <h2>Users</h2>
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
export class UserComponent implements OnInit {
  users: User[];
  constructor(private userService : UserService){}

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
