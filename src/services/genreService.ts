import {IRes} from "../types";
import {IGenre, IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: (): IRes<{ genres: IGenre[] }> => apiService.get(urls.genres.base),
    getByGenreId: (id: number, page?: number): IRes<{ results: IMovie[] }> => apiService.get(urls.genres.byGenreId(id), {params: {page}})
}

export {
    genreService
}