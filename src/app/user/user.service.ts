/**
 * Created by mancr on 3/12/2017.
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = 'http://localhost:8080/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
