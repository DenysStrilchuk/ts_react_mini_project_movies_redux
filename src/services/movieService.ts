import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService = {
    getAll: ():IRes<IMovie> => apiService.get(urls.movie.base),
    getByMovieId: (movieId: number):IRes<IMovie> => apiService.get(urls.movieDetails.movieById(movieId))
}

export {
    movieService
}