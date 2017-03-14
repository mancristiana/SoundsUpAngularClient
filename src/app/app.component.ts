import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>Hello</h1>
     
      <a routerLink="/signin">Signin</a>
      <a routerLink="/search">Search</a>
      
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
