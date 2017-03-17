import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `     
        <menu></menu>
        <div class="content">
            <router-outlet></router-outlet>
        </div>
  `,
})
export class AppComponent {
}
