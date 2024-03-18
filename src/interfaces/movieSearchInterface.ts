import {IMovie} from "./movieInterface";

export interface ISearch {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}