import {IGenre} from "./genreInterface";

export interface IMovie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    genres: IGenre[];
    release_date: string;
    runtime: number;
    vote_average: number;
    backdrop_path: string;
}