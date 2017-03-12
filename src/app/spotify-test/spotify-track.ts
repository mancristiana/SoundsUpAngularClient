/**
 * Created by mancr on 3/12/2017.
 */
export class SpotifyTrack {
    id: string;
    name: string;

    preview_url: string;

    album: {
        id: string,
        name: string,
        images: {
            height: number,
            url: string,
            width: number
        }[]
    };

    artists: {
        external_urls: {
            spotify: string
        },
        id: string
        name: string
    }[];

    external_urls: {
        spotify: string
    };

}
