import { Component } from "@angular/core";
/**
 * Created by mancr on 3/14/2017.
 */

@Component({
    selector: 'menu',
    template: `
    <div class="menu">
        <a class="brand">{{ name }}</a>
        <ul>
            <li><a routerLink="/signin"><i class="fa fa-signin" aria-hidden="true"></i></a></li>
            <li><a routerLink="/search"><i class="fa fa-search" aria-hidden="true"></i></a></li>
        </ul>
    </div>
        
       
    `
})
export class MenuComponent {
    name: string = "SoundsUp";
}
