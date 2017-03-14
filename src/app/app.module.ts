import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { UserModule } from "./user/user.module";
import { SpotifyTestModule } from "./spotify-test/spotify-test.module";
import { GoogleSigninComponent } from "./google-signin.component";
import { SpotifyTestComponent } from "./spotify-test/spotify-test.component";
import { MenuComponent } from "./menu.component";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: 'signin',
                component: GoogleSigninComponent
            },
            {
                path: 'search',
                component: SpotifyTestComponent
            }
        ]),
        HttpModule,
        UserModule,
        SpotifyTestModule
    ],
    providers: [],
    declarations: [
        AppComponent,
        GoogleSigninComponent,
        MenuComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
