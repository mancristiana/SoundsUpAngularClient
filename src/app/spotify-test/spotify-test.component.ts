/**
 * Created by mancr on 3/12/2017.
 */
import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SpotifyTrack } from "./spotify-track";
import { SpotifyTestService } from "./spotify-test.service";

@Component({
    selector: 'spotify-test',
    templateUrl: './app/spotify-test/spotify-test.component.html'
})
export class SpotifyTestComponent implements OnInit {
    tracks: Observable<SpotifyTrack[]>;
    private searchTerms = new Subject<string>();

    constructor(private spotifyService: SpotifyTestService) {
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.tracks = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.spotifyService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<SpotifyTrack[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<SpotifyTrack[]>([]);
            });
    }

}
