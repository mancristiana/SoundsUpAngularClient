/**
 * Created by mancr on 3/12/2017.
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SpotifyTrack } from "./spotify-track";

@Injectable()
export class SpotifyTestService {
    spotifyApi = "https://api.spotify.com/";
    constructor(private http: Http) {}

    search(track: string): Observable<SpotifyTrack[]> {
        return this.http
            .get(`${this.spotifyApi}v1/search?q=${track}&type=track`)
            .map(response => response.json().tracks.items as SpotifyTrack[]);
    }
}
