import {IRes} from "../types";
import {ISearch} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: string, page: number): IRes<ISearch> => apiService.get(urls.search.base, {params:{query,page}})
}

export {
    searchService
}