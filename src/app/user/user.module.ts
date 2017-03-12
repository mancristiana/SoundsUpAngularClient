/**
 * Created by mancr on 3/12/2017.
 */
import { UserService } from "./user.service";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { UserComponent } from "./user.components";

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  providers:    [ UserService ],
  declarations: [ UserComponent ],
  exports: [ UserComponent ],
  bootstrap:    []
})
export class UserModule { }
