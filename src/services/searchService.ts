import {IRes} from "../types";
import {ISearch} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: string):IRes<ISearch> => apiService.get(`${urls.search.base}?query=${query}`)
}

export {
    searchService
}