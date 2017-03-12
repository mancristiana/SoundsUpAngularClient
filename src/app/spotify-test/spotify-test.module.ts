/**
 * Created by mancr on 3/12/2017.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { SpotifyTestComponent } from "./spotify-test.component";
import { SpotifyTestService } from "./spotify-test.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SpotifyTestService],
  declarations: [SpotifyTestComponent],
  exports: [SpotifyTestComponent],
  bootstrap: []
})
export class SpotifyTestModule {
}
