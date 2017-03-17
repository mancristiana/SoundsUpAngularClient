import { Component } from "@angular/core";
/**
 * Created by mancr on 3/14/2017.
 */

@Component({
    selector: 'menu',
    template: `
    <div class="menu">
        <a class="brand">
            <img src="img/music-player.svg"/>
            <span>{{ name }}</span>
        </a>
        
        <ul>
            <li><a class="menu-item" routerLink="/signin"><i class="fa fa-sign-in" aria-hidden="true"></i></a></li>
            <li><a class="menu-item" routerLink="/search"><i class="fa fa-search" aria-hidden="true"></i></a></li>
        </ul>
    </div>
        
       
    `
})
export class MenuComponent {
    name: string = "SoundsUp";
}
