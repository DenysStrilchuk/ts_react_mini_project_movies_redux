import axios from "axios";
import {baseURL} from "../constants";

const apiService = axios.create({baseURL});

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.' +
    'eyJhdWQiOiJlNmEwZThhM2Q4M2I1NDM5ODA4YTdkOTU2NmNkN2ZlNSIsInN1YiI6IjY1ZDkwZTg1MzUyMGU4MDE0YWQ2MjI2YyIsInNjb3BlcyI6' +
    'WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6kbaSqHHNb9OOoUqPgRL5Nx39CGsbsNRWhRwLaSAK0c';

apiService.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
})

export {
    apiService
}