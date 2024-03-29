import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: (page: number): IRes<{ results: IMovie[] }> => apiService.get(urls.movie.base, {params: {page}}),
    getByMovieId: (id: number): IRes<IMovie> => apiService.get(urls.movieDetails.movieById(id))
}

export {
    movieService
}