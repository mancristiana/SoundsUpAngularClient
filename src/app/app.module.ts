import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { UserModule } from "./user/user.module";
import { SpotifyTestModule } from "./spotify-test/spotify-test.module";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    UserModule,
    SpotifyTestModule
  ],
  providers:    [],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
